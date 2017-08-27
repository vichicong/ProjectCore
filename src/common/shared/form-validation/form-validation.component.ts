import { Component, Input, OnInit, OnDestroy, Optional, HostBinding, SkipSelf, Host } from '@angular/core'
import { FormGroupDirective, FormGroupName, FormGroup, ControlContainer, FormArray, ValidationErrors } from '@angular/forms'
import { isEmpty, isFunction } from 'lodash'
import { Subscription } from 'rxjs/Subscription'

import { BackendErrorDirective } from './backend-error.directive'
import { log } from 'common/utils'

declare const WORKING_MODE: any

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[formValidation]',
  providers: [],
  templateUrl: './form-validation.component.html',
})

export class FormValidationComponent implements OnInit, OnDestroy {

  @Input('formValidation') controlName: string
  @Input() backendField: string | number

  backendErrors: Array < string >

  private controlSubscription: Subscription
  private backendSubscription: Subscription
  private form: FormGroup

  constructor(
    @Optional() @Host() @SkipSelf() private parent: ControlContainer,
    @Optional() private backendErrorDirective: BackendErrorDirective,
  ) {}

  ngOnInit() {
    if (!this.backendField) {
      this.backendField = this.controlName
    }
    if (!this.parent) {
      return
    }
    if (this.parent instanceof FormGroupName) {
      this.form = this.parent.control
    } else if (this.parent instanceof FormGroupDirective) {
      this.form = this.parent.form
    } else {
      return
    }

    if (this.form instanceof FormArray) {
      this.backendField = 0
    }

    this.subscribeBackendError()
  }

  ngOnDestroy() {
    if (this.controlSubscription) {
      this.controlSubscription.unsubscribe()
    }

    if (this.backendSubscription) {
      this.backendSubscription.unsubscribe()
    }
  }

  get visible(): boolean {
    if (this.parent instanceof FormGroupDirective) {
      return this.parent.submitted
    }

    if (this.parent instanceof FormGroupName && this.parent.formDirective) {
      const parent = (this.parent.formDirective as FormGroupDirective)
      return parent.submitted
    }
  }

  @HostBinding('class.has-danger')
  get hasError() {
    return this.visible && !isEmpty(this.errors)
  }

  get fieldName() {
    return this.backendField || this.controlName
  }

  get errors(): ValidationErrors {
    const control = this.form.controls[this.controlName]
    if (!control) {
      return
    }
    return control.errors
  }

  private subscribeBackendError() {
    if (!this.backendErrorDirective) {
      return
    }
    this.backendSubscription = this.backendErrorDirective.errors
      .subscribe(allBackendErrors => {
        if (!allBackendErrors) {
          return
        }
        this.backendErrors = allBackendErrors[this.fieldName] || []
      })
  }

}
