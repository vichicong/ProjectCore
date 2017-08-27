import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { Error404Component } from './error-404.component'
import { routerStub } from 'common/testutils'

describe('Error404Component', () => {
  let component: Error404Component
  let fixture: ComponentFixture<Error404Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Error404Component
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component)
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

    expect(h1.nativeElement.innerHTML).toBe('404')
    expect(h2.nativeElement.innerHTML).toBe('Error')
    expect(p.nativeElement.innerHTML).toBe('Page not found')
    expect(a.nativeElement.innerHTML).toBe('Go back home')
  })

  it('should be went back', () => {
    const a = fixture.debugElement.query(By.css('a'))
    expect(a.nativeElement.getAttribute('href')).toBe('/')
  })

})
