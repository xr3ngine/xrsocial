import ThreeMeshUI, { Block, Keyboard } from "../../assets/three-mesh-ui";
import { Group, Object3D, Color, TextureLoader, VideoTexture } from "three";
import { Engine } from "../../ecs/classes/Engine";

class ScenePanel extends Object3D {
  container:ThreeMeshUI.Block;
  siblings:[];  

    constructor(title, description, image){
      super();
  
      this.init(title, description);
    }
  
    init(title, description){
      this.siblings = [];
      this.container = new ThreeMeshUI.Block({
        width: 1,
        height: 0.5
      });
  
      this.container.position.set(0, 0, 0);
      this.add(this.container);
  
      const textBlock = new ThreeMeshUI.Block({
        height: 0.1,
        width: 0.9,
        margin: 0.01,
        padding: 0.02,
        fontSize: 0.025,
        alignContent: "left",
        backgroundColor: new Color( 'blue' ),
        backgroundOpacity: 0.0,
        fontFamily:
          "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.json",
        fontTexture:
          "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.png"
      }).add(
        new ThreeMeshUI.Text({
          content: title + '\n',
          fontSize: 0.05,
          // fontColor: new THREE.Color(0x96ffba)
        }),  
        new ThreeMeshUI.Text({
          content: description
        })
      );
  
      textBlock.position.set(0, -0.13, 0.1);
  
      this.add(textBlock);
    }

    pick(state){
      if(state){
        // this.visible = true;
        console.log('panel picked');
        // this.container.width = 2;
        // this.container.height = 1;
        // this.needsUpdate = true;

        this.container.set({width: 3, height: 1.5});
        this.position.set(0, 1, 0);
      }
      else{

      }
    }

    update(){
      console.log('engine last time:', Engine.lastTime);
    }
  }

  export default ScenePanel;