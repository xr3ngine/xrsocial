import EditorNodeMixin from "./EditorNodeMixin";
import { Sky } from "../../scene/classes/Sky";
import { CubeTextureLoader, EquirectangularReflectionMapping, sRGBEncoding, TextureLoader } from "three";
export default class SkyboxNode extends EditorNodeMixin(Sky) {
  static legacyComponentName = "skybox";
  static disableTransform = true;
  static ignoreRaycast = true;
  static nodeName = "Skybox";
  textureOptionValue: string;
  static canAddNode(editor) {
    return editor.scene.findNodeByType(SkyboxNode) === null;
  }
  static async deserialize(editor, json) {
    const node = await super.deserialize(editor, json);
    const skybox = json.components.find(c => c.name === "skybox");
    console.log("Deserializng The SkyBox", skybox.props, node);

    switch (skybox.props.skytype) {
      case "cubemap":
        node.textureOptionValue = skybox.props.texture;
      case "equirectangular":
        node.textureOptionValue = skybox.props.texture;
        break;
      default:
        const {
          turbidity,
          rayleigh,
          luminance,
          mieCoefficient,
          mieDirectionalG,
          inclination,
          azimuth,
          distance
        } = skybox.props;
        node.turbidity = turbidity;
        node.rayleigh = rayleigh;
        node.luminance = luminance;
        node.mieCoefficient = mieCoefficient;
        node.mieDirectionalG = mieDirectionalG;
        node.inclination = inclination;
        node.azimuth = azimuth;
        node.distance = distance;
    }
    node.skyOptionValue = skybox.props.skytype;

    return node;
  }
  onRendererChanged() {
    this.updateEnvironmentMap();
  }
  onAdd() {
    if (typeof this.skyOptionValue === 'undefined') {
      this.skyOptionValue = 'skybox';
    }
    this.updateEnvironmentMap();
  }
  onChange() {
    switch (this.skyOptionValue) {
      case "equirectangular":
      case "cubemap":
        this.sky.visible = false;
        this.editor.scene.background = this.getTexture();
        break;
      default:
        this.sky.visible = true;
        this.editor.scene.background = null;
        const renderer = this.editor.renderer.renderer;
        const envMap = this.generateEnvironmentMap(renderer);
        return envMap;
    }
    this.updateEnvironmentMap();
  }
  onRemove() {
    this.editor.scene.updateEnvironmentMap(null);
  }

  getTexture() {
    switch (this.skyOptionValue) {
      case "equirectangular":
        const texture = new TextureLoader().load(this.textureOptionValue);
        texture.encoding = sRGBEncoding;
        texture.mapping = EquirectangularReflectionMapping;
        texture.needsUpdate = true;
        return texture;
      case "cubemap":
        const textureBox = new CubeTextureLoader()
          .setPath(this.textureOptionValue)
          .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
        return textureBox;
      default:
        const renderer = this.editor.renderer.renderer;
        const envMap = this.generateEnvironmentMap(renderer);
        return envMap;
    }
  }

  updateEnvironmentMap() {
    this.editor.scene.updateEnvironmentMap(this.getTexture());
  }

  serialize() {
    let data: any = {};
    switch (this.skyOptionValue) {
      case "cubemap":
        data = {
          texture: this.textureOptionValue
        };
        break;
      case "equirectangular":
        data = {
          texture: this.textureOptionValue
        };
        break;
      default:
        data = {
          turbidity: this.turbidity,
          rayleigh: this.rayleigh,
          luminance: this.luminance,
          mieCoefficient: this.mieCoefficient,
          mieDirectionalG: this.mieDirectionalG,
          inclination: this.inclination,
          azimuth: this.azimuth,
          distance: this.distance
        };
    }
    data.skytype = this.skyOptionValue;
    return super.serialize({
      skybox: data 
    });
  }
  prepareForExport() {
    super.prepareForExport();
    this.addGLTFComponent("skybox", {
      turbidity: this.turbidity,
      rayleigh: this.rayleigh,
      luminance: this.luminance,
      mieCoefficient: this.mieCoefficient,
      mieDirectionalG: this.mieDirectionalG,
      inclination: this.inclination,
      azimuth: this.azimuth,
      distance: this.distance
    });
    this.replaceObject();
  }
}
