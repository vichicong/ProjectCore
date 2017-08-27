import { Component, forwardRef, Input, ViewChild, ElementRef, Renderer, ViewEncapsulation, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor, } from '@angular/forms'
import { DomSanitizer, } from '@angular/platform-browser'
import { ImageCropperSetting, Asset } from 'common/types'
import { ModalDirective, } from 'ngx-bootstrap'
import { ImageCropperModalComponent, } from '../image-cropper-modal/image-cropper-modal.component'

@Component({
  selector: 'image-cropper-control',
  templateUrl: './image-cropper-control.component.html',
  styleUrls: ['./image-cropper-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageCropperControlComponent),
    multi: true,
  }],
})

export class ImageCropperControlComponent implements AfterViewInit, OnDestroy {

  @Input() btnCloseText = 'Close'
  @Input() btnSaveText = 'Add'
  @Input() cropperOptions
  @Input() imageUrl: string
  @Input() minHeight = 150
  @Input() modalTitle = 'Crop image'
  @Input() settings: ImageCropperSetting
  @Output() onSaved = new EventEmitter
  @Output() onRemoved = new EventEmitter
  @ViewChild('container') private containerRef: ElementRef
  @ViewChild('cropper') private cropper: ImageCropperModalComponent
  @ViewChild('cropperModal') private cropperModal: ModalDirective

  image: Asset
  displayedUrl: string

  private onChange: Function
  private onTouched: Function

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer,
  ) {}

  writeValue(file?: Asset) {
    file = file || < Asset > {}
    this.image = file
    this.displayedUrl = file.fullUrl as string
  }

  registerOnChange(fn) {
    this.onChange = fn
  }

  registerOnTouched(fn) {
    this.onTouched = fn
  }

  openCropperWindow(input: HTMLInputElement) {
    const inputFile = input.files[0]
    input.value = ''
    if (!inputFile) {
      return
    }
    this.image = {} as Asset
    this.image.fileName = inputFile.name
    const imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(inputFile))
    this.openModal(imageUrl)
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

  remove(ev: Event) {
    ev.stopPropagation()
    ev.preventDefault()
    this.image = undefined
    this.displayedUrl = undefined
    this.imageUrl = undefined
    URL.revokeObjectURL(this.displayedUrl)
    this.onChange(undefined)
    this.onRemoved.emit()
  }

  get isEmpty(): boolean {
    return !this.image || !this.imageUrl
  }

  saveData(data) {
    this.cropperModal.hide()
    if (!data) {
      return
    }
    this.updateValue(data)
    URL.revokeObjectURL(this.displayedUrl)
  }

  private openModal(imageUrl) {
    this.cropperModal.show()
    this.cropperOptions = this.cropperOptions || {
      viewMode: 1
    }
    this.cropper.loadImage(imageUrl)
  }

  private updateValue(result: any) {
    if (!result) {
      return
    }
    this.transform(result)
    if (this.onChange) {
      this.onChange(this.image)
    }
  }

  private transform(result: any): any {
    if (this.displayedUrl) {
      URL.revokeObjectURL(this.displayedUrl)
    }
    this.displayedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(result.blob)) as string
    this.imageUrl = result.blob
    this.image.url = result.blob
    this.image.fullUrl = result.blob
  }
}
