import { ActivatedRoute, Router } from '@angular/router'
import { Directive, forwardRef, Injector, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { omitBy, isUndefined } from 'lodash'
import { Subject } from 'rxjs/Subject'

import { DataTableAccessor } from 'common/shared/data-table/data-table-accessor'
import { DataTableAccessorData } from 'common/types'
import { merge } from 'common/utils'

@Directive({
  selector: 'data-table[routeAccessor]',
  providers: [{
    provide: DataTableAccessor,
    useExisting: forwardRef(() => DataTableRouteAccessorDirective)
  }]
})

export class DataTableRouteAccessorDirective implements DataTableAccessor, OnInit {

  data: Observable<DataTableAccessorData<any>>
  params: any

  private reloadToken = new Subject()
  private routeResolver

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const resolver = this.route.routeConfig.resolve.itemList
    this.routeResolver = this.injector.get(resolver)

    const routeResolveData$ = this.route.data
      .map(data => data.itemList)
    const forceResolve$ = this.reloadToken
      .switchMap(_ => this.routeResolver.resolve(this.route.snapshot))
    this.data = routeResolveData$.merge(forceResolve$)
  }

  fetch(params?) {
    if (!params) {
      this.reloadToken.next()
      return this.data
    }

    const currentParams = this.route.snapshot.params
    params = omitBy(merge(currentParams, params), isUndefined)
    this.router.navigate([params], { relativeTo: this.route })
    return this.data
  }

  remove(item: any): Observable<any> {
    return this.routeResolver.remove(item.id)
  }

}
