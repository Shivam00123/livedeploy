import { engine } from "@needle-tools/engine/engine/engine";
import "./register_types"
import { scripts } from "./scripts";
import * as THREE from 'three';

// BUILD SCENE 	(=^･ｪ･^=))ﾉ彡☆
const loadScene = async function(context, opts)
{
	const scene = context.scene;
	let scriptsList = context.new_scripts;
	
	const sceneRoot_1597275519 = await engine.loadSync(context, "assets/sceneRoot.glb", null, false, prog => opts?.progress?.call(opts, {name: "sceneRoot.glb", progress: prog, index: 0, count: 1}));
	if(sceneRoot_1597275519)
	{
		scene.add(sceneRoot_1597275519.scene);
	}
	
	// EventSystem / EventSystem
	const eventSystem_1786657969_EventSystem = new scripts.EventSystem();
	eventSystem_1786657969_EventSystem.__name = "EventSystem";
	eventSystem_1786657969_EventSystem.guid = "1786657969";
	scriptsList.push(eventSystem_1786657969_EventSystem);
	
	const eventSystem_1786657970 = new THREE.Object3D();
	eventSystem_1786657970.name = "EventSystem";
	eventSystem_1786657970.guid = "1786657970";
	eventSystem_1786657970.position.set(0,0,0);
	eventSystem_1786657970.setRotationFromQuaternion(new THREE.Quaternion(0,0,0,1)); // (0.00, 0.00, 0.00)
	eventSystem_1786657970.scale.set(1,1,1);
	scene.add(eventSystem_1786657970);
	
	
	// RESOLVE REFERENCES ※\(^o^)/※
	
	// eventSystem_1786657969_EventSystem
	eventSystem_1786657969_EventSystem.enabled = true;
	eventSystem_1786657969_EventSystem.firstSelected = null;
	eventSystem_1786657969_EventSystem.sendNavigationEvents = true;
	eventSystem_1786657969_EventSystem.dragThreshold = 10;
	eventSystem_1786657969_EventSystem.sendNavigationEvents = true;
	eventSystem_1786657969_EventSystem.pixelDragThreshold = 10;
	eventSystem_1786657969_EventSystem.currentInputModule = null;
	eventSystem_1786657969_EventSystem.firstSelectedGameObject = null;
	eventSystem_1786657969_EventSystem.currentSelectedGameObject = null;
	eventSystem_1786657969_EventSystem.isFocused = true;
	eventSystem_1786657969_EventSystem.alreadySelecting = false;
	eventSystem_1786657969_EventSystem.enabled = true;
	const eventSystem_1786657970_obj = engine.tryFindObject("1786657970", scene, true);
	if (eventSystem_1786657970_obj) {
		eventSystem_1786657970_obj.layers.set(0);
		eventSystem_1786657970_obj.visible = true;
		eventSystem_1786657970_obj.userData.layer = 0;
		eventSystem_1786657970_obj.userData.name = `EventSystem`;
		eventSystem_1786657970_obj.userData.tag = `Untagged`;
		eventSystem_1786657970_obj.userData.hideFlags = 0;
		eventSystem_1786657970_obj.userData.activeSelf = true;
		eventSystem_1786657970_obj.userData.static = false;
		eventSystem_1786657970_obj.guid = "1786657970";
	}
	eventSystem_1786657969_EventSystem.gameObject = eventSystem_1786657970_obj;
	
	// point to global scripts array now
	scriptsList = context.scripts;
}
engine.build_scene_functions["loadScene"] = loadScene;

console.log("Made with ♥ by 🌵 needle - https://needle.tools");
