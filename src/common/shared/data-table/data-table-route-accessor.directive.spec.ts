import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { DataTableRouteAccessorDirective } from './data-table-route-accessor.directive'

describe('DataTableRouteAccessorDirective', () => {
  const route = {
    data: new BehaviorSubject({items: []})
  } as any
  const injector = {} as any
  const router = {} as any

  it('should create an instance', () => {
    const directive = new DataTableRouteAccessorDirective(route, injector, router)
    expect(directive).toBeTruthy()
  })

})
