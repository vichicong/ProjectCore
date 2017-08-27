import { CommonModule } from '@angular/common'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ToastModule } from 'ng2-toastr'

import { DataTableComponent } from './data-table/data-table.component'
import { DataTableFooterComponent } from './data-table-footer/data-table-footer.component'
import { DataTableQuantityComponent } from './data-table-quantity/data-table-quantity.component'
import { DataTableRouteAccessorDirective } from './data-table-route-accessor.directive'
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component'
import { SortFieldDirective } from './sort-field.directive'

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    RouterModule,
    ToastModule,
  ],
  declarations: [
    DataTableComponent,
    DataTableFooterComponent,
    DataTableQuantityComponent,
    DataTableRouteAccessorDirective,
    ModalConfirmDeleteComponent,
    SortFieldDirective,
  ],
  exports: [
    DataTableComponent,
    DataTableFooterComponent,
    DataTableQuantityComponent,
    DataTableRouteAccessorDirective,
    ModalConfirmDeleteComponent,
    SortFieldDirective,
  ],
})

export class DataTableModule {}
