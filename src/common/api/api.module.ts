import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PostApi } from './post-api.service'

@NgModule({
  providers: [
    PostApi,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})

export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [],
    }
  }
}
