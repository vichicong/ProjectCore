import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { BsDropdownModule, ModalModule, TabsModule, TooltipModule } from 'ngx-bootstrap'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { ToastModule, ToastOptions } from 'ng2-toastr'

import { ApiModule } from 'common/api/api.module'
import { AppComponent } from './app.component'
import { AppConfig } from 'common/app.config'
import { AppRoutingModule } from './app-routing.component'
import { CoreModule } from 'common/core/core.module'
import { environment } from 'common/environments/environment'
import { RedactorModule } from 'common/redactor'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ApiModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CoreModule.forRoot(),
    HttpModule,
    ModalModule.forRoot(),
    RedactorModule.forRoot(),
    TabsModule.forRoot(),
    ToastModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [{
    provide: ToastOptions,
    useValue: {
      showCloseButton: true,
      animate: 'flyRight',
      newestOnTop: true,
      positionClass: 'toast-top-right',
      toastLife: 3000,
      titleClass: 'toast-title',
      enableHTML: true,
    }
  }, {
    provide: AppConfig,
    useValue: {
      resourceApiUrl: environment.resourceApiUrl,
      clientId: environment.clientIdOrganization,
      clientSecret: environment.clientSecretOrganization,
      openIdRedirectUri: environment.openIdRedirectUrlOrganization,
    },
    multi: false,
  }],
  bootstrap: [AppComponent]
})

export class AppModule {}
