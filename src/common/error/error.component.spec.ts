import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ErrorComponent } from './error.component'

describe('ErrorComponent', () => {
  let component: ErrorComponent
  let fixture: ComponentFixture<ErrorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorComponent,
      ],
      imports: [
        RouterTestingModule,
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
    expect(window.document.body.className).toBe('theme-dark colorful-enabled single-page')
  })

})
