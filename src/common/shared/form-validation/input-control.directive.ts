import { Directive, Input, HostBinding, Optional } from '@angular/core'

import { FormValidationComponent } from '../form-validation/form-validation.component'

@Directive({
  selector: '[inputControl]',
  providers: [],
})

export class InputControlDirective {

  constructor(
    @Optional() private formValidation: FormValidationComponent,
  ) {}

  @HostBinding('class.has-danger')
  get isInvalid(): boolean {
    return this.formValidation && this.formValidation.visible && !!this.formValidation.errors
  }

}
