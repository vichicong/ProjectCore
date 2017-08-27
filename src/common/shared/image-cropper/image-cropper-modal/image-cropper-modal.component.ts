import Cropper from 'cropperjs'
import { Component, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core'
import { ImageCropperSetting, ImageCropperResult } from 'common/types'

@Component({
  selector: 'image-cropper-modal',
  templateUrl: './image-cropper-modal.component.html',
  styleUrls: ['./image-cropper-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ImageCropperModalComponent {
  @ViewChild('image') image

  @Input() imageUrl
  @Input() settings: ImageCropperSetting
  @Input() loadImageErrorText: string
  @Input() cropperOptions = {}

  @Output() export = new EventEmitter<ImageCropperResult>()
  @Output() ready = new EventEmitter()

  isLoading = true
  loadError: any

  private cropper: Cropper
  private imageElement: HTMLImageElement

  imageLoaded(ev: Event) {
    this.isLoading = true
    this.loadError = false

    const image = ev.target as HTMLImageElement
    this.imageElement = image
    image.crossOrigin = 'anonymous'

    image.addEventListener('ready', () => {
      this.ready.emit(true)
      window.dispatchEvent(new Event('resize'))
      this.isLoading = false
    })
    if (this.cropper) {
      this.cropper.destroy()
    }
    this.cropper = new Cropper(image, this.cropperOption)
  }

  imageLoadError(event) {
    this.loadError = true
    this.isLoading = false
  }

  loadImage(imageUrl: string) {
    this.isLoading = imageUrl !== this.imageUrl
    window.setTimeout(() => {
      this.imageUrl = imageUrl
      this.isLoading = false
    }, 1000)
  }

  exportCanvas(base64 ? ) {
    const imageData = this.cropper.getImageData()
    const cropData = this.cropper.getCropBoxData()
    const canvas = this.cropper.getCroppedCanvas()
    const data = {
      imageData,
      cropData,
    }

    const promise = new Promise(resolve => {
      if (base64) {
        return resolve({
          dataUrl: canvas.toDataURL('image/png'),
        })
      }
      canvas.toBlob(blob => resolve({
        blob
      }))
    })

    promise.then(res => {
      this.export.emit(Object.assign(data, res))
    })
  }

  private get cropperOption(): Cropper.CropperOptions {
    let aspectRatio = NaN
    if (this.settings) {
      const {
        width,
        height
      } = this.settings
      aspectRatio = width / height
    }

    return Object.assign({
      aspectRatio,
      movable: false,
      scalable: false,
      zoomable: false,
    }, this.cropperOptions)
  }

}
