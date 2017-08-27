import { TestBed, inject } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppConfig } from 'common/app.config'
import { SessionService, ErrorHandlerService } from 'common/core'

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        ErrorHandlerService,
        SessionService,
      ],
      imports: [
        RouterTestingModule,
      ]
    })
  })

  it('should be created', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    expect(service).toBeTruthy()
  }))

})
