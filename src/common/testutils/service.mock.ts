import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Injectable } from '@angular/core'

declare var jasmine: any

@Injectable()
export class ActivatedRouteStub {

  private _testParams = {}
  private subject = new BehaviorSubject(this.testParams)
  params = this.subject.asObservable()

  get testParams() { return this._testParams }
  set testParams(params: {}) {
    this._testParams = params
    this.subject.next(params)
  }

  get snapshot() {
    return { params: this.testParams }
  }
}

export const routerStub = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl(url: string) { return url }
}
