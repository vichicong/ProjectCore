import { ActivatedRoute } from '@angular/router'
import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core'

import { generatePagesArray, merge } from 'common/utils'

@Component({
  selector: 'data-table-footer',
  templateUrl: './data-table-footer.component.html',
  styleUrls: ['./data-table-footer.component.scss']
})

export class DataTableFooterComponent implements OnChanges {

  @Input() count: number
  @Input() numberOfPagesToDisplay = 3
  @Input() page: number
  @Input() quantity: number
  @Input() quantityPerPage: number
  @Input() useLink = true
  @Output() pageChanged = new EventEmitter()

  from
  pages: number[]
  to
  totalPages: number

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnChanges() {
    this.totalPages = Math.ceil(this.count / this.quantityPerPage)
    this.pages = generatePagesArray(this.numberOfPagesToDisplay, this.totalPages, this.page)
    const from = (this.page - 1) * this.quantityPerPage + 1
    const to = from + this.quantity - 1
    this.from = from || 0
    this.to = to || 0
  }

  get hasPrev() {
    return this.page > 1
  }

  get hasNext() {
    return this.page < this.totalPages
  }

  goToPage(p) {
    this.pageChanged.emit(p)
  }

  getLink(page: number) {
    return merge(this.route.snapshot.params, { page, quantity: this.quantityPerPage })
  }

}
