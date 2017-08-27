import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorComponent } from './error.component'
import { ErrorContainerComponent } from '../error-container/error-container.component'
import { FormValidationComponent } from 'common/shared'

describe('ErrorComponent', () => {
  let component: ErrorComponent
  let fixture: ComponentFixture < ErrorComponent >

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorContainerComponent,
        FormValidationComponent,
      ],
      declarations: [
        ErrorComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
