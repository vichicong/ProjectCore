import { NgModule, ModuleWithProviders } from '@angular/core'

import { Redactor } from './redactor.component'
import { RedactorConfig } from './config'
import { RedactorGlobalConfig } from './redactor-global-config.class'

@NgModule({
  exports: [Redactor],
  declarations: [Redactor]
})

export class RedactorModule {
  static forRoot(config: RedactorConfig = {}): ModuleWithProviders {
    return {
      ngModule: RedactorModule,
      providers: [{
        provide: RedactorGlobalConfig,
        useValue: config
      }],
    }
  }
}
