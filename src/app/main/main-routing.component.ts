import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main.component'

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
  // {
  //   path: 'press-release',
  //   loadChildren: '../press-release/press-release.module#PressReleaseModule',
  // },
  // {
  //   path: 'press-conference',
  //   loadChildren: '../press-conference/press-conference.module#PressConferenceModule',
  // }
]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MainRoutingModule {}
