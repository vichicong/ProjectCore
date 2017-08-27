import { Directive, HostListener, Input, HostBinding, OnInit, Inject } from '@angular/core'

import { DataTableAccessor } from './data-table-accessor'
import { SortDirection } from 'common/types'

@Directive({
  selector: '[sortField]'
})

export class SortFieldDirective implements OnInit {

  @HostBinding('class.sorting_asc') isSortAsc
  @HostBinding('class.sorting_desc') isSortDesc
  @HostBinding('class.sorting') isSorting = true
  @Input() sortField: string

  private currentDirection: SortDirection
  private currentSortField: string

  constructor(
    @Inject(DataTableAccessor) private accessor: DataTableAccessor,
  ) {}

  ngOnInit() {
    this.accessor.data.subscribe(data => {
      const paging = data.paging
      if (!paging) {
        return
      }
      const sortBy = paging.sortBy
      const sortDirection = +paging.sortDirection || 0
      this.currentDirection = sortDirection
      this.currentSortField = sortBy
      this.isSortAsc = sortBy === this.sortField && (!sortDirection || sortDirection === SortDirection.ascending)
      this.isSortDesc = sortBy === this.sortField && sortDirection === SortDirection.descending
    })
  }

  @HostListener('click')
  click() {
    const sortBy = this.sortField
    const sortDirection = this.sortField !== this.currentSortField ? SortDirection.ascending : this.toggle(this.currentDirection)
    const params =  { sortBy, sortDirection }
    this.accessor.fetch(params)
  }

  private toggle(d) {
    return d === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending
  }

}
