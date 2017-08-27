import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core'
import { DomSanitizer, } from '@angular/platform-browser'
import { ModalDirective, } from 'ngx-bootstrap'

import { ImageCropperSetting, Asset } from 'common/types'
import { ImageCropperModalComponent, } from './image-cropper-modal/image-cropper-modal.component'
import { ConfirmationComponent } from 'common/core'

@Component({
  selector: 'image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() imageUrl: string
  @Input() settings: ImageCropperSetting
  @Input() cropperOptions
  @Input() minHeight = 150
  @Input('confirmation') confirmationMessage: string

  @Output() onRemoved = new EventEmitter()
  @Output() onUpdated = new EventEmitter()

  @ViewChild('removeConfirmation') private removeConfirmation: ConfirmationComponent
  @ViewChild('inputFile') private inputFile: ElementRef
  @ViewChild('cropperModal') private cropperModal: ModalDirective
  @ViewChild('container') private containerRef: ElementRef
  @ViewChild('cropper') private cropper: ImageCropperModalComponent

  image: Asset
  displayedUrl: string

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer,
  ) {}

  get isEmpty() {
    return !this.image || !this.image.fullUrl
  }

  ngOnInit() {
    this.displayedUrl = this.imageUrl
    this.image = <Asset> {}
    this.image.fullUrl = this.imageUrl as string
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.displayedUrl)
  }

  ngAfterViewInit() {
    const label = this.containerRef.nativeElement as HTMLDivElement
    const setLabelSize = ({
      width,
      height
    }) => {
      this.renderer.setElementStyle(label, 'height', `${height}px`)
      this.renderer.setElementStyle(label, 'width', `${width}px`)
    }
    if (this.settings) {
      let width = label.offsetWidth
      if (!width) {
        setLabelSize(this.settings)
        return
      }

      const height = Math.min(this.settings.height / this.settings.width * width, this.settings.height)
      width = height * this.settings.width / this.settings.height
      setLabelSize({
        width,
        height
      })
    }
  }

  openCropperWindow(input: HTMLInputElement) {
    const inputFile = input.files[0]
    input.value = ''
    if (!inputFile) {
      return
    }
    this.image.fileName = inputFile.name
    const imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(inputFile))
    this.openModal(imageUrl)
  }

  remove(ev: Event) {
    ev.stopPropagation()
    ev.preventDefault()
    const subscription = this.removeConfirmation.onConfirm.subscribe(() => {
      this.image = <Asset>{}
      this.displayedUrl = undefined
      URL.revokeObjectURL(this.displayedUrl)
      this.onRemoved.emit()
      subscription.unsubscribe()
    })
    this.removeConfirmation.show()
  }

  change() {
    const input = this.inputFile.nativeElement as HTMLInputElement
    input.click()
  }

  saveData(data) {
    this.cropperModal.hide()
    if (!data) {
      return
    }
    URL.revokeObjectURL(this.displayedUrl)
    this.updateValue(data)
  }

  private updateValue(result: any) {
    if (!result) {
      return
    }
    this.transform(result)
    this.onUpdated.emit(this.image)
  }

  private openModal(imageUrl) {
    this.cropperModal.show()
    this.cropperOptions = this.cropperOptions || {
      viewMode: 1
    }
    this.cropper.loadImage(imageUrl)
  }

  private transform(result: any): any {
    if (this.displayedUrl) {
      URL.revokeObjectURL(this.displayedUrl)
    }
    this.displayedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(result.blob)) as string
    this.image.url = result.blob
    this.image.fullUrl = result.blob
  }
}
