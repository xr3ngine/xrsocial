import { Service, SequelizeServiceOptions } from 'feathers-sequelize'
import { Id, Params } from '@feathersjs/feathers'
import { BadRequest } from '@feathersjs/errors'
import chargebee from 'chargebee'
import { Application } from '../../declarations'
import config from './../../config'

export class Subscription extends Service {

  app: Application
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options)
    this.app = app
  }

  async create(data: any, params: Params): Promise<any> {
    const userId = (params as any).connection['identity-provider'].userId || params.body.userId
    if (userId == null) {
      throw new Error('Invalid user')
    }

    const unconfirmedSubscriptions = await super.find({
      query: {
        userId: userId,
        status: 0
      }
    }) as any

    await Promise.all(unconfirmedSubscriptions.data.map((subscription: any) => {
      return super.remove(subscription.id)
    }))
    let plan: string
    const found = await this.app.service('subscription-type').find({
      query: {
        plan: data.plan
      }
    })
    if (!found) {
      plan = 'monthly-subscription-free'
    } else {
      plan = data.plan
    }
    const saveData = {
      userId,
      plan,
      amount: (found as any).data[0].amount ?? 0,
      quantity: 1
    }
    const saved = await super.create(saveData, params)

    const returned = {
      subscriptionId: saved.id,
      paymentUrl: `https://${config.chargebee.url}/hosted_pages/plans/${plan}?subscription[id]=${saved.id as string}&customer[id]=${userId as string}`
    }

    return returned
  }

  async get(id: Id, params?: Params): Promise<any> {
    let chargebeeSubscription
    let subscriptionDetail
    const userId = (params as any).connection['identity-provider'].userId || params.body.userId

    try {
      chargebeeSubscription = await chargebee.subscription.retrieve(id).request()
      subscriptionDetail = chargebeeSubscription.subscription
      console.log(subscriptionDetail)
    } catch (err) {
      throw new BadRequest('Invalid Subscription ID')
    }

    if (chargebeeSubscription.customer.id !== userId) {
      throw new BadRequest('Mismatched Customer ID')
    }
    return subscriptionDetail
  }
}
