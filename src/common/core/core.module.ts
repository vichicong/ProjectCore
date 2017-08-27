import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { LoadingComponent } from './loading/loading.component'

import { ErrorHandlerService } from './error-handler.service'
import { SeoService } from './seo.service'
import { SessionService } from './session.service'

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
  ],
  exports: [
    ConfirmationComponent,
    LoadingComponent,
  ],
  providers: [SeoService],
  declarations: [
    ConfirmationComponent,
    LoadingComponent,
  ],
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ErrorHandlerService,
        SessionService,
      ],
    }
  }
}
