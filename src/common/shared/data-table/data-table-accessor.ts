import { Observable } from 'rxjs/Observable'

import { DataTableAccessorData } from 'common/types'

export abstract class DataTableAccessor {

  data: Observable < DataTableAccessorData < any > >
  params: any
  abstract fetch(params?: any): Observable < DataTableAccessorData< any > >
  abstract remove(params: any): Observable < any >

}
