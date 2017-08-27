import { ActivatedRoute } from '@angular/router'
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'
import { range } from 'lodash'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnChanges {

  @Input() maxPage: number
  @Input() currentPage: number
  @Input() linkButton = true
  @Output() goToPage = new EventEmitter()

  displayPages: number[] = []

  private maxNumberOfPages = 5

  constructor(
    private route: ActivatedRoute
  ) {}


  ngOnChanges() {
    this.resetPages()
  }

  hasPrev() {
    return this.currentPage > 1
  }

  hasNext() {
    return this.currentPage < this.maxPage
  }

  resetPages() {
    this.prepareDisplayPages()
  }

  linkParam(page) {
    const currentParams = this.route.snapshot.params
    const _params = Object.assign(
      {},
      currentParams,
      {page}
    )
    return _params
  }

  private prepareDisplayPages() {
    this.displayPages = []
    const distance = Math.floor(this.maxNumberOfPages / 2)
    const start = Math.max(this.currentPage - distance, 1)
    const end = Math.min(start + this.maxNumberOfPages - 1, this.maxPage)
    let displayPages = range(start, end + 1)
    if (!displayPages.length) {
      displayPages = [1]
    }

    this.displayPages = displayPages
  }

}
