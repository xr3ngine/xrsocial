import {
  WebGLCubeRenderTarget,
  ClampToEdgeWrapping,
  CubeCamera,
  DoubleSide,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneBufferGeometry,
  RawShaderMaterial,
  RGBAFormat,
  Scene,
  UnsignedByteType,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
  Uniform,
  CubeTexture,
  PMREMGenerator,
  BackSide,
  MeshBasicMaterial,
  IcosahedronGeometry,
  Texture
} from 'three'
import Api from '@xrengine/client-core/src/world/components/editor/Api'

export default class CubemapCapturer {
  width: number
  height: number
  renderer: WebGLRenderer
  cubeCamera: CubeCamera
  cubeRenderTarget: WebGLCubeRenderTarget
  sceneToRender: Scene

  constructor(renderer: WebGLRenderer, sceneToRender: Scene, resolution: number) {
    this.width = resolution
    this.height = resolution
    this.sceneToRender = sceneToRender
    this.renderer = renderer
    this.cubeCamera = null
    const gl = this.renderer.getContext()
    const cubeMapSize = Math.min(resolution, gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
    this.cubeRenderTarget = new WebGLCubeRenderTarget(cubeMapSize, {
      format: RGBAFormat,
      magFilter: LinearFilter,
      minFilter: LinearFilter
    })
    this.cubeCamera = new CubeCamera(0.1, 1000, this.cubeRenderTarget)
  }

  update = (position: Vector3): WebGLCubeRenderTarget => {
    const autoClear = this.renderer.autoClear
    this.renderer.autoClear = true
    this.cubeCamera.position.copy(position)
    this.cubeCamera.update(this.renderer, this.sceneToRender)
    this.renderer.autoClear = autoClear
    return this.cubeRenderTarget
  }
}
