import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { Error403Component } from './error-403.component'
import { routerStub } from 'common/testutils'

describe('Error403Component', () => {
  let component: Error403Component
  let fixture: ComponentFixture<Error403Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Error403Component
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Error403Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should be created page', () => {
    const h1 = fixture.debugElement.query(By.css('h1'))
    const h2 = fixture.debugElement.query(By.css('h2'))
    const p = fixture.debugElement.query(By.css('p'))
    const a = fixture.debugElement.query(By.css('a'))

    expect(h1.nativeElement.innerHTML).toBe('403')
    expect(h2.nativeElement.innerHTML).toBe('Forbidden')
    expect(p.nativeElement.innerHTML).toBe('You might not have permission to visit the requested page')
    expect(a.nativeElement.innerHTML).toBe('Go back home')
  })

  it('should be went back', () => {
    const a = fixture.debugElement.query(By.css('a'))
    expect(a.nativeElement.getAttribute('href')).toBe('/')
  })

})
