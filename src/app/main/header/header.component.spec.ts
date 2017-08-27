import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpModule } from '@angular/http'
import { RouterTestingModule } from '@angular/router/testing'

import { AppConfig } from 'common/app.config'
import { AuthApi } from 'common/api'
import { environment } from 'common/environments/environment'
import { ErrorHandlerService, SessionService } from 'common/core'
import { HeaderComponent } from './header.component'
import { mockComponent } from 'common/testutils'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthApi,
        AppConfig,
        ErrorHandlerService,
        SessionService,
      ],
      declarations: [
        HeaderComponent,
        mockComponent({ selector: '[id-display]', inputs: ['id-display', 'displayName', 'supplementName', 'noTooltip'] }),
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
