import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Error403Component } from './error-403/error-403.component'
import { Error404Component } from './error-404/error-404.component'
import { ErrorComponent } from './error.component'
import { ErrorRoutingModule } from './error-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [
    Error403Component,
    Error404Component,
    ErrorComponent,
  ]
})

export class ErrorModule {}
