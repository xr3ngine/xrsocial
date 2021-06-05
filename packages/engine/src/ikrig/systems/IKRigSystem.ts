import { System } from "@xrengine/engine/src/ecs/classes/System";
import { getMutableComponent } from "@xrengine/engine/src/ecs/functions/EntityFunctions";
import IKRig from "@xrengine/engine/src/ikrig/components/IKRig";
import { FORWARD, UP } from "@xrengine/engine/src/ikrig/constants/Vector3Constants";
import DebugComponent from "../classes/Debug";
import { IKPose } from "../components/IKPose";
import { applyHip, applyLimb, applyLookTwist, applySpine, computeHip, computeLimb, computeLookTwist, computeSpine, visualizeHip, visualizeLimb, visualizeLookTwist, visualizeSpine } from "../functions/IKFunctions";

export class IKRigSystem extends System {
	execute(deltaTime) {
		// DEBUG
		this.queryResults.debug.all?.forEach((entity) => {
			const d = getMutableComponent(entity, DebugComponent);
			d.reset(); // For this example, Lets reset visual debug for every compute.
		})
		// RUN
		this.queryResults.ikpose.all?.forEach((entity) => {
			let pose = getMutableComponent(entity, IKPose);
			let rig = getMutableComponent(entity, IKRig);

			// // COMPUTE
			computeHip(rig, pose);

			computeLimb(rig.pose, rig.chains.leg_l, pose.leg_l);
			computeLimb(rig.pose, rig.chains.leg_r, pose.leg_r);

			computeLookTwist(rig, rig.points.foot_l, pose.foot_l, FORWARD, UP); // Look = Fwd, Twist = Up
			computeLookTwist(rig, rig.points.foot_r, pose.foot_r, FORWARD, UP);

			computeSpine(rig, rig.chains.spine, pose, UP, FORWARD);

			computeLimb(rig.pose, rig.chains.arm_l, pose.arm_l);
			computeLimb(rig.pose, rig.chains.arm_r, pose.arm_r);

			computeLookTwist(rig, rig.points.head, pose.head, FORWARD, UP);

			// // VISUALIZE
			visualizeHip(rig, pose);

			visualizeLimb(rig.pose, rig.chains.leg_l, pose.leg_l);
			visualizeLimb(rig.pose, rig.chains.leg_r, pose.leg_r);
			visualizeLimb(rig.pose, rig.chains.arm_l, pose.arm_l);
		 	visualizeLimb(rig.pose, rig.chains.arm_r, pose.arm_r);

			visualizeLookTwist(rig, rig.points.foot_l, pose.foot_l);
			visualizeLookTwist(rig, rig.points.foot_r, pose.foot_r);
			visualizeSpine(rig, rig.chains.spine, pose.spine);
			visualizeLookTwist(rig, rig.points.head, pose.head);

			// APPLY
			applyHip(entity);

			applyLimb(entity, rig.chains.leg_l, pose.leg_l);
			// applyLimb(entity, rig.chains.leg_r, pose.leg_r);

			// applyLookTwist(entity, rig.points.foot_l, pose.foot_l, FORWARD, UP);
			// applyLookTwist(entity, rig.points.foot_r, pose.foot_r, FORWARD, UP);
			// applySpine(entity, rig.chains.spine, pose.spine, UP, FORWARD);

			// applyLimb(entity, rig.chains.arm_l, pose.arm_l);
			// applyLimb(entity, rig.chains.arm_r, pose.arm_r);

			// applyLookTwist(entity, rig.points.head, pose.head, FORWARD, UP);
			rig.pose.apply();

		});
	}
}
IKRigSystem.queries = {
	ikrigs: {
		components: [IKRig],
		listen: {
			added: true,
			removed: true,
			changed: true
		}
	},
	ikpose: {
		components: [IKPose],
		listen: {
			added: true,
			removed: true,
			changed: true
		}
	},
	debug: {
		components: [DebugComponent],
		listen: {
			added: true,
			removed: true,
			changed: true
		}
	}
};