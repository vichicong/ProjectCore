import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

import { AppGuard } from './app.guard'

const routes: Routes = [{
  path: '',
  loadChildren: './main/main.module#MainModule',
  canActivate: [AppGuard]
}, {
  path: 'error',
  loadChildren: 'common/error/error.module#ErrorModule'
}, {
  pathMatch: 'full',
}, {
  path: '**',
  redirectTo: 'error/404',
  pathMatch: 'full'
}]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AppGuard]
})

export class AppRoutingModule {}
