import { Directive, Input, OnChanges } from '@angular/core'
import { Subject } from 'rxjs/Subject'

import { BackendError } from 'common/types'

@Directive({
  selector: '[backendError]',
  providers: [],
})

export class BackendErrorDirective implements OnChanges {

  @Input() backendError: BackendError
  public errors = new Subject()

  constructor() {}

  ngOnChanges() {
    if (this.backendError) {
      if (this.backendError.validationErrors) {
        this.errors.next(this.backendError.validationErrors)
      } else {
        this.errors.next(this.backendError)
      }
    } else {
      this.errors.next(undefined)
    }
  }

}
