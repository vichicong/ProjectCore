import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap'
import { CommonModule } from '@angular/common'
import { CoreModule } from 'common/core/core.module'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RedactorModule } from 'common/redactor'
import { RouterModule } from '@angular/router'
import { ToastModule } from 'ng2-toastr'

import { ErrorPipe } from './pipes/error.pipe'
import { FileSizePipe } from './pipes/file-size.pipe'
import { FormValidationModule } from './form-validation/form-validation.module'
import { IdDisplayComponent } from './id-display/id-display.component'
import { ImageCropperModule } from './image-cropper/image-cropper.module'
import { ImagePipe } from './pipes/image.pipe'
import { PaginationComponent } from './pagination/pagination.component'

@NgModule({
  imports: [
    BsDropdownModule,
    CommonModule,
    CoreModule,
    FormValidationModule,
    ImageCropperModule,
    ReactiveFormsModule,
    RedactorModule,
    RouterModule,
    ToastModule,
    TooltipModule,
  ],
  exports: [
    BsDropdownModule,
    CoreModule,
    ErrorPipe,
    FileSizePipe,
    FormValidationModule,
    IdDisplayComponent,
    ImageCropperModule,
    ImagePipe,
    PaginationComponent,
    ReactiveFormsModule,
  ],
  declarations: [
    ErrorPipe,
    FileSizePipe,
    IdDisplayComponent,
    ImagePipe,
    PaginationComponent,
  ],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    }
  }
}
