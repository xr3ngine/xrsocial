import { Service, SequelizeServiceOptions } from 'feathers-sequelize'
import { Op } from 'sequelize'
import { Application } from '../../declarations'
import { Params, NullableId } from '@feathersjs/feathers'
import { Forbidden } from '@feathersjs/errors'

export class PartyUser extends Service {
  app: Application
  constructor (options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
    this.app = app
  }

  async find (params: Params): Promise<[] | any> {
    // Find All users of selected party

    const PartyModel = this.app.service('party').Model
    const PartyUserModel = this.getModel(params)
    const partyUserModelIns = await PartyUserModel.findOne({
      where: {
        partyId: params?.query?.partyId,
        userId: params.user.userId
      },
      include: [
        {
          model: PartyModel,
          attributes: ['id']
        }
      ]
    })
    if (!partyUserModelIns) {
      return
    }

    const partyUsers = await partyUserModelIns.party.getUsers({ attributes: ['email', 'userId', 'id'] })

    return partyUsers
  }

  async create (data: any, params: Params): Promise<any> {
    const PartyModel = this.app.service('party').Model
    const PartyUsersModel = this.app.service('party-user').Model

    // For now only Admin will add users in party
    const party = await PartyModel.findOne({
      where: {
        id: data.partyId
      }
    })

    if (!party) {
      return await Promise.reject(new Forbidden('Party not found Or you don\'t have access!'))
    }

    // We are able to take benefit of using sequelize method *addUser* available due to *many to many* relationShip but
    // that was making one extra Query for getting party details Therefore we are doing it manually

    const userPartyModel = new PartyUsersModel({
      partyId: party.id,
      userId: data.userId
    })

    await userPartyModel.save()
    const user = await this.app.service('user').Model.findOne({
      where: {
        id: data.userId
      },
      attributes: ['id', 'name']
    })
    this.app.service('chatroom').emit('party', {
      type: 'added',
      data: user
    })
    return party
  }

  async remove (userIdToRemove: NullableId, params: Params): Promise<any> {
    const PartyUserModel = this.getModel(params)
    const PartyModel = this.app.service('party').Model

    const partyUser = await PartyUserModel.findOne({
      where: {
        userId: userIdToRemove
      }
    })
    if (!partyUser) {
      return await Promise.reject(new Forbidden('Party not found Or you don\'t have access!'))
    }
    await this.makeOtherUserAsOwner(partyUser, PartyModel, PartyUserModel)
    this.app.service('chatroom').emit('party', {
      type: 'leave',
      data: {
        userId: userIdToRemove
      }
    })
    return true
  }

  private async makeOtherUserAsOwner (partyUser: any, PartyModel: any, PartyUserModel: any): Promise<any> {
    const promises = []
    const partyUsers = await PartyUserModel.findAll({
      where: {
        partyId: partyUser.partyId,
        userId: {
          [Op.ne]: partyUser.userId
        }
      }
    })

    if (partyUsers.length > 1) {
      if (partyUser.isOwner) {
        const otherPartyUser = await PartyUserModel.findOne({
          where: {
            partyId: partyUser.partyId,
            userId: { [Op.ne]: partyUser.userId }
          }
        })
        promises.push(otherPartyUser.update({ isOwner: true }))
      }
      await partyUser.destroy()
    } else {
      const partyId = partyUser.partyId
      await partyUser.destroy()
      promises.push(PartyModel.destroy({
        where: {
          id: partyId
        }
      }))
    }
    return await Promise.all(promises)
  }
}
