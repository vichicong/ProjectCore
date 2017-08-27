import { Component, HostBinding, Host, SkipSelf, Input } from '@angular/core'

import { ErrorContainerComponent } from '../error-container/error-container.component'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent {

  @Input('name') private fieldName: string

  constructor(@Host() @SkipSelf() private parent: ErrorContainerComponent) {}

  get isFrontendErrorsHidden(): boolean {
    if (this.parent && this.parent.errors) {
      return !this.parent.errors[this.fieldName] as boolean
    }
    return true
  }

}
