import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit, Input } from '@angular/core'
import { omitBy, isUndefined } from 'lodash'

import { merge } from 'common/utils'

@Component({
  selector: 'data-table-quantity',
  templateUrl: './data-table-quantity.component.html',
  styleUrls: ['./data-table-quantity.component.scss']
})

export class DataTableQuantityComponent implements OnInit {

  @Input() quantities = [10, 20, 50, 100]

  currentValue

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.currentValue = +this.route.snapshot.params.quantity
  }

  onChange(quantity) {
    let params = merge(this.route.snapshot.params, {
      quantity: +quantity,
      page: 1,
    })
    params = omitBy(params, isUndefined)
    this.router.navigate([params], { relativeTo: this.route })
  }

}
