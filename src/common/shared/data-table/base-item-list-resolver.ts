import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { BaseApi } from 'common/api/base-api.service'
import { DataTableAccessorData, SortDirection } from 'common/types'

export class BaseItemListResolver<T> implements Resolve<DataTableAccessorData<T>> {
  constructor(
    protected api: BaseApi<T>
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line:prefer-const
    let { page, quantity, query, sortBy, sortDirection } = route.params
    sortBy = sortBy ? sortBy : 'createdDate'
    sortDirection = sortDirection !== undefined ? sortDirection : SortDirection.descending
    page = +page || 1
    quantity = +quantity || 10
    const skip = (page - 1) * quantity
    const take = quantity

    return this.api.query({
      skip,
      take,
      sortBy,
      sortDirection,
      query: query
    }).map(res => ({
      items: res.items,
      paging: {
        page,
        quantity,
        sortBy,
        sortDirection,
        total: res.count
      },
      filter: {
        query,
      }
    }))
    .catch(_ => Observable.of({}))
    .share()
  }

  remove(itemId: string) {
    return this.api.remove(itemId)
  }
}
