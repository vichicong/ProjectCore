import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ConfirmationComponent } from './confirmation.component'
import { ModalDirective, ComponentLoaderFactory, } from 'ngx-bootstrap'

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent
  let fixture: ComponentFixture < ConfirmationComponent >

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        providers: [
          { provide: ComponentLoaderFactory, useValue: { createLoader: () => {} } },
        ],
        declarations: [
          ConfirmationComponent,
          ModalDirective,
        ],
        imports: []
      })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
