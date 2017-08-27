import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorContainerComponent } from './error-container.component'
import { FormValidationComponent } from 'common/shared'

describe('ErrorContainerComponent', () => {
  let component: ErrorContainerComponent
  let fixture: ComponentFixture<ErrorContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormValidationComponent,
      ],
      declarations: [
        ErrorContainerComponent,
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
