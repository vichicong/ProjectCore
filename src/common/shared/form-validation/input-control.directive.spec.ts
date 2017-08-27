import { InputControlDirective } from './input-control.directive'
import { FormValidationComponent } from '../form-validation/form-validation.component'

describe('InputControlDirective', () => {
  it('should create an instance', () => {
    // tslint:disable-next-line:prefer-const
    let formValidation: FormValidationComponent
    const directive = new InputControlDirective(formValidation)
    expect(directive).toBeTruthy()
  })

})
