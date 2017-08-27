import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalModule } from 'ngx-bootstrap'
import { CoreModule } from 'common/core'
import { ImageCropperComponent } from './image-cropper.component'
import { ImageCropperModalComponent } from './image-cropper-modal/image-cropper-modal.component'
import { ImageCropperControlComponent } from './image-cropper-control/image-cropper-control.component'

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    CoreModule,
  ],
  exports: [
    ImageCropperComponent,
    ImageCropperModalComponent,
    ImageCropperControlComponent,
  ],
  declarations: [
    ImageCropperComponent,
    ImageCropperModalComponent,
    ImageCropperControlComponent,
  ]
})
export class ImageCropperModule { }
