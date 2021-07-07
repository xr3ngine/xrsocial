import {
  LinearFilter,
  sRGBEncoding,
  PlaneBufferGeometry,
  MeshBasicMaterial,
  DoubleSide,
  Mesh,
  SphereBufferGeometry,
  RGBAFormat,
  VideoTexture
} from "three";
import Hls from "hls.js/dist/hls.light";
import isHLS from "../../editor/functions/isHLS";
import AudioSource from "./AudioSource";
export const VideoProjection = {
  Flat: "flat",
  Equirectangular360: "360-equirectangular"
};
import { Engine } from "../../ecs/classes/Engine";

export default class Video extends AudioSource {
  // @ts-ignore
  _texture: any;
  _mesh: Mesh;
  _projection: string;
  hls: Hls;
  constructor(audioListener, isSynced: boolean, id: string) {
    super(audioListener, "video", id);

    // Appending element to the body so that it can be find by document.getElementById
    document.body.appendChild(this.el);

    // @ts-ignore
    this._texture = new VideoTexture(this.el);
    this._texture.minFilter = LinearFilter;
    this._texture.encoding = sRGBEncoding;
    const geometry = new PlaneBufferGeometry();
    const material = new MeshBasicMaterial({ color: 0xffffff });
    material.map = this._texture;
    material.side = DoubleSide;
    this._mesh = new Mesh(geometry, material);
    this._mesh.name = "VideoMesh";
    (this as any).add(this._mesh);
    this._projection = "flat";
    this.hls = null;
    this.isSynced = isSynced;
  }
  loadVideo(src, contentType) {
    return new Promise<void>((resolve, reject) => {
      const _isHLS = isHLS(src, contentType);
      if (_isHLS) {
        if (!this.hls) {
          this.hls = new Hls();
        }
        this.hls.on(Hls.Events.MEDIA_ATTACHED, () => { 
          this.hls.on((Hls as any).Events.MANIFEST_PARSED, (event, data) => {
            document.addEventListener('click', () => {
              this.el.play()
            })
            resolve()
          });
          this.hls.loadSource(src);
        })
        this.hls.attachMedia(this.el);
      }
      if (!this.el.src) {
        this.el.src = src;
      }
      if (this.isSynced) {
        this.el.pause();
      }
      this.el.addEventListener('play', () => {
        console.log('play')
      });
      this.el.addEventListener('pause', () => {
        console.log('pause')
      });
      
      const onLoadedMetadata = () => {
        cleanup();
        cleanup();
        resolve();
      };
      const onError = error => {
        cleanup();
        console.log(`Error loading video "${this.el.src}"`, error)
        resolve()
        // reject(
        //   new RethrownError()
        // );
      };
      let cleanup = () => {
        this.el.removeEventListener("loadeddata", onLoadedMetadata);
        this.el.removeEventListener("error", onError);
      };
      if (_isHLS) {
        this.hls.on((Hls as any).Events.ERROR, onError);
      }
      this.el.addEventListener("loadeddata", onLoadedMetadata);
      this.el.addEventListener("error", onError);
    });
  }
  get projection() {
    return this._projection;
  }
  set projection(projection) {
    if (projection === this._projection) {
      return;
    }
    const material = new MeshBasicMaterial();
    let geometry;
    if (projection === "360-equirectangular") {
      geometry = new SphereBufferGeometry(1, 64, 32);
      // invert the geometry on the x-axis so that all of the faces point inward
      geometry.scale(-1, 1, 1);
    } else {
      geometry = new PlaneBufferGeometry();
      material.side = DoubleSide;
    }
    material.map = this._texture;
    this._projection = projection;
    const nextMesh = new Mesh(geometry, material);
    nextMesh.name = "VideoMesh";
    const meshIndex = (this as any).children.indexOf(this._mesh);
    if (meshIndex === -1) {
      (this as any).add(nextMesh);
    } else {
      (this as any).children.splice(meshIndex, 1, nextMesh);
      nextMesh.parent = this;
    }
    this._mesh = nextMesh;
    this.onResize();
  }
  get src() {
    return this.el.src;
  }
  set src(src) {
    this.load(src).catch(console.error);
  }
  async load(src, contentType?) {
    if(!src) return this;
    this._mesh.visible = false;
    await this.loadVideo(src, contentType);
    this.onResize();
    if(Engine.useAudioSystem) {
      this.audioSource = this.audioListener.context.createMediaElementSource(this.el);
      this.audio.setNodeSource(this.audioSource);
    }
    if (this._texture.format === RGBAFormat) {
      (this._mesh.material as MeshBasicMaterial).transparent = true;
    }
    (this._mesh.material as MeshBasicMaterial).map = this._texture;
    (this._mesh.material as MeshBasicMaterial).needsUpdate = true;
    this._mesh.visible = true;
    return this;
  }
  onResize() {
    if (this.projection === VideoProjection.Flat) {
      const ratio = (this.el.videoHeight || 1.0) / (this.el.videoWidth || 1.0);
      const width = Math.min(1.0, 1.0 / ratio);
      const height = Math.min(1.0, ratio);
      this._mesh.scale.set(width, height, 1);
    }
  }
  clone(recursive) {
    return new (this.constructor as any)(this.audioListener).copy(this, recursive);
  }
  copy(source, recursive = true) {
    super.copy(source, false);
    if (recursive) {
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        if (child !== source.audio && child !== source._mesh) {
          (this as any).add(child.clone());
        }
      }
    }
    this.projection = source.projection;
    this.isSynced = source.isSynced;
    return this;
  }
}
