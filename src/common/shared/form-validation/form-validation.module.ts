import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormValidationComponent } from './form-validation.component'
import { ErrorComponent } from './error/error.component'
import { ErrorContainerComponent } from './error-container/error-container.component'
import { BackendErrorDirective } from './backend-error.directive'
import { InputControlDirective } from './input-control.directive'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormValidationComponent,
    ErrorComponent,
    ErrorContainerComponent,
    BackendErrorDirective,
    InputControlDirective,
  ],
  exports: [
    ReactiveFormsModule,
    FormValidationComponent,
    ErrorComponent,
    ErrorContainerComponent,
    BackendErrorDirective,
    InputControlDirective,
  ],
})

export class FormValidationModule {}
