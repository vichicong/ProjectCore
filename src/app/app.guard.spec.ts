import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, async, inject } from '@angular/core/testing'

import { AppConfig } from 'common/app.config'
import { AuthApi } from 'common/api'
import { AppGuard } from './app.guard'
import { SessionService } from 'common/core'

describe('AppGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AppConfig, useValue: {} },
        { provide: AuthApi, useValue: {} },
        { provide: SessionService, useValue: {} },
        AppGuard
      ],
      imports: [
        RouterTestingModule
      ],
    })
  })

  it('should be created', inject([AppGuard], (guard: AppGuard) => {
    expect(guard).toBeTruthy()
  }))

})
