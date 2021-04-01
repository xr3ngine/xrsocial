import { BaseInput } from '../../input/enums/BaseInput';
import { LifecycleValue } from '../../common/enums/LifecycleValue';
import { isServer } from '../../common/functions/isServer';
import { isClient } from '../../common/functions/isClient';
import { Behavior } from '../../common/interfaces/Behavior';
import { Entity } from '../../ecs/classes/Entity';
import { getComponent, getMutableComponent } from '../../ecs/functions/EntityFunctions';
import { Input } from "../../input/components/Input";
import { GamepadButtons, MouseInput, GamepadAxis } from '../../input/enums/InputEnums';
import { InputType } from '../../input/enums/InputType';
import { InputSchema } from '../../input/interfaces/InputSchema';
import { InputAlias } from "../../input/types/InputAlias";
import { Network } from '../../networking/classes/Network';
import { sendClientObjectUpdate } from '../../networking/functions/sendClientObjectUpdate';
import { PlayerInCar } from '../../physics/components/PlayerInCar';
import { VehicleBody } from '../../physics/components/VehicleBody';
import { CameraModes } from "../../camera/types/CameraModes";
import { isMobileOrTablet } from '../../common/functions/isMobile';
import { VehicleState, VehicleStateUpdateSchema } from './enums/VehicleStateEnum';
import { FollowCameraComponent } from '../../camera/components/FollowCameraComponent';

const getOutCar: Behavior = (entityCar: Entity): void => {
  if(isClient) return;
  let entity = null;
  const vehicle = getComponent(entityCar, VehicleBody);

  let networkPlayerId = null

  if(isServer) {
    networkPlayerId = vehicle.wantsExit.filter(f => f != null)[0];
    console.warn('wantsExit: '+ vehicle.wantsExit);
  } else {
    networkPlayerId = Network.instance.localAvatarNetworkId
  }

  if (networkPlayerId == undefined) {
    console.warn('car dont have driver to do getOutCar behavior');
    return;
  }

  for (let i = 0; i < vehicle.seatPlane.length; i++) {
    if (networkPlayerId == vehicle[vehicle.seatPlane[i]]) {
      entity = Network.instance.networkObjects[networkPlayerId].component.entity;
    }
  }
  console.warn(VehicleState.onStartRemove);
  getMutableComponent(entity, PlayerInCar).state = VehicleState.onStartRemove;
  sendClientObjectUpdate(entity, [VehicleState.onStartRemove] as VehicleStateUpdateSchema);
/*
  networkCarId: getComponent(entityCar, NetworkObject).networkId,
  currentFocusedPart: args.currentFocusedPart,
  */
/*
  const event = new CustomEvent('player-in-car', { detail:{inCar:false} });
  document.dispatchEvent(event);
*/
};

const drive: Behavior = (entity: Entity, args: { direction: number }): void => {
  const vehicleComponent = getMutableComponent<VehicleBody>(entity, VehicleBody);
  if(isClient && vehicleComponent.driver != Network.instance.localAvatarNetworkId) return;
  const vehicle = vehicleComponent.vehiclePhysics;

  vehicle.setBrake(0, 0);
  vehicle.setBrake(0, 1);
  vehicle.setBrake(0, 2);
  vehicle.setBrake(0, 3);

  // direction is reversed to match 1 to be forward
  vehicle.applyEngineForce(vehicleComponent.maxForce * args.direction * -1, 2);
  vehicle.applyEngineForce(vehicleComponent.maxForce * args.direction * -1, 3);
  vehicleComponent.isMoved = true;
};

const stop: Behavior = (entity: Entity, args: { direction: number }): void => {
  const vehicleComponent = getMutableComponent<VehicleBody>(entity, VehicleBody);
  vehicleComponent.isMoved = false;
  return;
  if(isClient && vehicleComponent.driver != Network.instance.localAvatarNetworkId) return;
  const vehicle = vehicleComponent.vehiclePhysics;

  vehicle.setBrake(10, 0);
  vehicle.setBrake(10, 1);
  vehicle.setBrake(10, 2);
  vehicle.setBrake(10, 3);

  // direction is reversed to match 1 to be forward
  vehicle.applyEngineForce(0, 2);
  vehicle.applyEngineForce(0, 3);
};

const driveByInputAxis: Behavior = (entity: Entity, args: { input: InputAlias; inputType: InputType }): void => {
  const input =  getComponent<Input>(entity, Input as any);
  const data = input.data.get(args.input);

  const vehicleComponent = getMutableComponent<VehicleBody>(entity, VehicleBody);
  if(isClient && vehicleComponent.driver != Network.instance.localAvatarNetworkId) return;
  const vehicle = vehicleComponent.vehiclePhysics;

  vehicle.setBrake(0, 0);
  vehicle.setBrake(0, 1);
  vehicle.setBrake(0, 2);
  vehicle.setBrake(0, 3);

  if (data.type === InputType.TWODIM) {
    // direction is reversed to match 1 to be forward
    vehicle.applyEngineForce(vehicleComponent.maxForce * data.value[0] * -1, 2);
    vehicle.applyEngineForce(vehicleComponent.maxForce * data.value[0] * -1, 3);

    vehicle.setSteeringValue( vehicleComponent.maxSteerVal * data.value[1], 0);
    vehicle.setSteeringValue( vehicleComponent.maxSteerVal * data.value[1], 1);
  }
  vehicleComponent.isMoved = true;
};

export const driveHandBrake: Behavior = (entity: Entity, args: { on: boolean }): void => {
  const vehicleComponent = getMutableComponent<VehicleBody>(entity, VehicleBody);
  if(isClient && vehicleComponent.driver != Network.instance.localAvatarNetworkId) return;
  const vehicle = vehicleComponent.vehiclePhysics;

  vehicle.setBrake(args.on? 10 : 0, 0);
  vehicle.setBrake(args.on? 10 : 0, 1);
  vehicle.setBrake(args.on? 10 : 0, 2);
  vehicle.setBrake(args.on? 10 : 0, 3);
};

const driveSteering: Behavior = (entity: Entity, args: { direction: number }): void => {

  const vehicleComponent = getMutableComponent<VehicleBody>(entity, VehicleBody);
  if(isClient && vehicleComponent.driver != Network.instance.localAvatarNetworkId) return;
  const vehicle = vehicleComponent.vehiclePhysics;

  vehicle.setSteeringValue( vehicleComponent.maxSteerVal * args.direction, 0);
  vehicle.setSteeringValue( vehicleComponent.maxSteerVal * args.direction, 1);

};

let lastScrollDelta = 0;
let changeTimeout = undefined;
const switchCameraMode = (entity: Entity, args: any = { pointerLock: false, mode: CameraModes.ThirdPerson }): void => {

  if(changeTimeout !== undefined) return;
  changeTimeout = setTimeout(() => {
    clearTimeout(changeTimeout);
    changeTimeout = undefined;
  }, 250);

  //const actor: CharacterComponent = getMutableComponent<CharacterComponent>(entity, CharacterComponent as any);

  const cameraFollow = getMutableComponent(entity, FollowCameraComponent);
  cameraFollow.mode = args.mode

  switch(args.mode) {
    case CameraModes.FirstPerson: {
      cameraFollow.offset.set(0, 1, 0);
      cameraFollow.phi = 0;
      cameraFollow.locked = true;
      //setVisible(actor, false);
    } break;
/*
    case CameraModes.ShoulderCam: {
      cameraFollow.offset.set(cameraFollow.shoulderSide ? -0.25 : 0.25, 1, 0);
    //  setVisible(actor, true);
    } break;
*/
    default: case CameraModes.ThirdPerson: {
      cameraFollow.offset.set(cameraFollow.shoulderSide ? -0.25 : 0.25, 1, 0);
    //  setVisible(actor, true);
    } break;

    case CameraModes.TopDown: {
      cameraFollow.offset.set(0, 1, 0);
      //setVisible(actor, true);
    } break;
  }
};

const changeCameraDistanceByDelta: Behavior = (entity: Entity, { input:inputAxes, inputType }: { input: InputAlias; inputType: InputType }): void => {
  const inputComponent = getComponent(entity, Input) as Input;

  if (!inputComponent.data.has(inputAxes)) {
    return;
  }

  const cameraFollow = getMutableComponent<FollowCameraComponent>(entity, FollowCameraComponent);
  if(cameraFollow === undefined) return //console.warn("cameraFollow is undefined");

  const inputPrevValue = inputComponent.prevData.get(inputAxes)?.value as number ?? 0;
  const inputValue = inputComponent.data.get(inputAxes).value as number;

  const delta = Math.min(1, Math.max(-1, inputValue - inputPrevValue)) * (isMobileOrTablet() ? 0.25 : 1);
  if(cameraFollow.mode !== CameraModes.ThirdPerson && delta === lastScrollDelta) {
    return
  }
  lastScrollDelta = delta;

  switch(cameraFollow.mode) {
    case CameraModes.FirstPerson:
      if(delta > 0) {
        switchCameraMode(entity, { mode: CameraModes.ThirdPerson })
      }
    break;
    /*
    case CameraModes.ShoulderCam:
      if(delta > 0) {
        switchCameraMode(entity, { mode: CameraModes.ThirdPerson })
        cameraFollow.distance = cameraFollow.minDistance + 1
      }
      if(delta < 0) {
        switchCameraMode(entity, { mode: CameraModes.FirstPerson })
      }
    break;
    */
    default: case CameraModes.ThirdPerson:
      const newDistance = cameraFollow.distance + delta;
      cameraFollow.distance = Math.max(cameraFollow.minDistance, Math.min( cameraFollow.maxDistance, newDistance));

      if(cameraFollow.distance >= cameraFollow.maxDistance) {
        if(delta > 0) {
        //  switchCameraMode(entity, { mode: CameraModes.TopDown })
        }
      } else if(cameraFollow.distance <= cameraFollow.minDistance) {
        if(delta < 0) {
          switchCameraMode(entity, { mode: CameraModes.FirstPerson })
        }
      }

    break;
    /*
    case CameraModes.TopDown:
      if(delta < 0) {
        switchCameraMode(entity, { mode: CameraModes.ThirdPerson })
      }
    break;
    */
  }
};

const createVehicleInput = () => {
  const map: Map<InputAlias, InputAlias> = new Map();

  map.set(MouseInput.LeftButton, BaseInput.PRIMARY);
  map.set(MouseInput.RightButton, BaseInput.SECONDARY);
  map.set(MouseInput.MiddleButton, BaseInput.INTERACT);

  map.set(MouseInput.MouseMovement, BaseInput.MOUSE_MOVEMENT);
  map.set(MouseInput.MousePosition, BaseInput.SCREENXY);
  map.set(MouseInput.MouseClickDownPosition, BaseInput.SCREENXY_START);
  map.set(MouseInput.MouseClickDownTransformRotation, BaseInput.ROTATION_START);
  map.set(MouseInput.MouseClickDownMovement, BaseInput.LOOKTURN_PLAYERONE);
  map.set(MouseInput.MouseScroll, BaseInput.CAMERA_SCROLL);

  map.set(GamepadButtons.A, BaseInput.JUMP);
  map.set(GamepadButtons.B, BaseInput.CROUCH);
  map.set(GamepadButtons.X, BaseInput.WALK);
  map.set(GamepadButtons.Y, BaseInput.INTERACT);
  map.set(GamepadButtons.DPad1, BaseInput.FORWARD);
  map.set(GamepadButtons.DPad2, BaseInput.BACKWARD);
  map.set(GamepadButtons.DPad3, BaseInput.LEFT);
  map.set(GamepadButtons.DPad4, BaseInput.RIGHT);

  map.set(GamepadAxis.Left, BaseInput.MOVEMENT_PLAYERONE);
  map.set(GamepadAxis.Right, BaseInput.LOOKTURN_PLAYERONE);

  map.set('w', BaseInput.FORWARD);
  map.set('a', BaseInput.LEFT);
  map.set('s', BaseInput.BACKWARD);
  map.set('d', BaseInput.RIGHT);
  map.set('e', BaseInput.INTERACT);
  map.set(' ', BaseInput.JUMP);
  map.set('shift', BaseInput.CROUCH);
  map.set('p', BaseInput.POINTER_LOCK);
  map.set('c', BaseInput.SECONDARY);

  return map;
}

export const VehicleInputSchema: InputSchema = {
  onAdded: [],
  onRemoved: [],
  // Map mouse buttons to abstract input
  inputMap: createVehicleInput(),
  // "Button behaviors" are called when button input is called (i.e. not axis input)
  inputButtonBehaviors: {
    [BaseInput.SECONDARY]: {
      ended: [
      ]
    },
    [BaseInput.INTERACT]:  {
      started: [
        {
          behavior: getOutCar,
          args: {
            phase:LifecycleValue.STARTED
          }
        }
      ]
    },
    [BaseInput.FORWARD]: {
      started: [
        {
          behavior: drive,
          args: {
            direction: 1
          }
        }
      ],
      continued: [
        {
          behavior: drive,
          args: {
            direction: 1
          }
        }
      ],
      ended: [
        {
          behavior: stop,
          args: {
            direction: 0
          }
        }
      ]
    },
    [BaseInput.BACKWARD]: {
      started: [
        {
          behavior: drive,
          args: {
            direction: -1
          }
        }
      ],
      continued: [
        {
          behavior: drive,
          args: {
            direction: -1
          }
        }
      ],
      ended: [
        {
          behavior: stop,
          args: {
            direction: 0
          }
        }
      ]
    },
    [BaseInput.LEFT]: {
      started: [
        {
          behavior: driveSteering,
          args: {
            direction: 1
          }
        }
      ],
      continued: [
        {
          behavior: driveSteering,
          args: {
            direction: 1
          }
        }
      ],
      ended: [
        {
          behavior: driveSteering,
          args: {
            direction: 0
          }
        }
      ]
    },
    [BaseInput.RIGHT]: {
      started: [
        {
          behavior: driveSteering,
          args: {
            direction: -1
          }
        }
      ],
      continued: [
        {
          behavior: driveSteering,
          args: {
            direction: -1
          }
        }
      ],
      ended: [
        {
          behavior: driveSteering,
          args: {
            direction: 0
          }
        }
      ]
    },
    [BaseInput.JUMP]: {
      started: [
        {
          behavior: driveHandBrake,
          args: {
            on: true
          }
        }
      ],
      continued: [
        {
          behavior: driveHandBrake,
          args: {
            on: true
          }
        }
      ],
      ended: [
        {
          behavior: driveHandBrake,
          args: {
            on: false
          }
        }
      ],
    },
  },
  // Axis behaviors are called by continuous input and map to a scalar, vec2 or vec3
  inputAxisBehaviors: {
    [BaseInput.MOVEMENT_PLAYERONE]: {
      started: [
        {
          behavior: driveByInputAxis,
          args: {
            input: BaseInput.MOVEMENT_PLAYERONE,
            inputType: InputType.TWODIM
          }
        }
      ],
      changed: [
        {
          behavior: driveByInputAxis,
          args: {
            input: BaseInput.MOVEMENT_PLAYERONE,
            inputType: InputType.TWODIM
          }
        }
      ]
    },
    [BaseInput.CAMERA_SCROLL]: {
      started: [
        {
          behavior: changeCameraDistanceByDelta,
          args: {
            input: BaseInput.CAMERA_SCROLL,
            inputType: InputType.ONEDIM
          }
        }
      ],
      changed: [
        {
          behavior: changeCameraDistanceByDelta,
          args: {
            input: BaseInput.CAMERA_SCROLL,
            inputType: InputType.ONEDIM
          }
        }
      ],
      unchanged: [
        {
          behavior: changeCameraDistanceByDelta,
          args: {
            input: BaseInput.CAMERA_SCROLL,
            inputType: InputType.ONEDIM
          }
        }
      ],
    }
  }
};
