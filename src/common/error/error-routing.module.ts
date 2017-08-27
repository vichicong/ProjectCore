import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { Error403Component } from './error-403/error-403.component'
import { Error404Component } from './error-404/error-404.component'
import { ErrorComponent } from './error.component'

const routes: Routes = [{
  path: '', component: ErrorComponent,
  children: [{
    path: '403',
    component: Error403Component
  }, {
    path: '404',
    component: Error404Component
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ErrorRoutingModule {}
