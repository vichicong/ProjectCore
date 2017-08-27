import { BsDropdownModule } from 'ngx-bootstrap'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.component'
import { SharedModule } from 'common/shared'

@NgModule({
  imports: [
    BsDropdownModule,
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
  ],
  providers: [
  ],
  entryComponents: [
    MainComponent,
  ],
})

export class MainModule {}

