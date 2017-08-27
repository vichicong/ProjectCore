import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, async } from '@angular/core/testing'
import { ToastsManager } from 'ng2-toastr'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ToastsManager, useValue: { setRootViewContainerRef: () => {} } },
      ],
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
      ]
    }).compileComponents()
  }))

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const organization = fixture.debugElement.componentInstance
    expect(organization).toBeTruthy()
  }))

})
