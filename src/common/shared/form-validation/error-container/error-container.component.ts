import { Component, OnInit } from '@angular/core'

import { FormValidationComponent } from '../form-validation.component'

@Component({
  selector: 'error-container',
  templateUrl: './error-container.component.html',
  styleUrls: ['./error-container.component.scss']
})

export class ErrorContainerComponent {

  constructor(
    private formValidation: FormValidationComponent,
  ) {}

  get errors() {
    return this.formValidation && this.formValidation.visible && this.formValidation.errors
  }

  get backendErrors() {
    return this.formValidation && this.formValidation.visible && this.formValidation.backendErrors
  }

}
