import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { TooltipDirective } from 'ngx-bootstrap'

import { IdDisplayComponent } from './id-display.component'
import { BackgroundImageDirective } from '../directives/background-image.directive'
import { Image } from 'common/types'

describe('IdDisplayComponent', () => {
  let component: IdDisplayComponent
  let fixture: ComponentFixture<IdDisplayComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdDisplayComponent,
        BackgroundImageDirective,
        TooltipDirective,
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IdDisplayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should be get tooltip', () => {
    component.tooltipText = '123'
    expect(component.tooltip).toBe('123')
    component.tooltipText = null
    component.supplementName = '456'
    component.displayName = '789'
    expect(component.tooltip).toBe('456 789')
  })

  it('should be initial class', () => {
    component.displayName = ''
    expect(component.initialClass).toBe('id-initial-class-0')
    component.displayName = 'A23'
    expect(component.initialClass).toBe('id-initial-class-6')
  })

  it('should be get thumbnail size', () => {
    component.size = 72
    expect(component.thumbnailSize).toBe(100)
    component.size = 172
    expect(component.thumbnailSize).toBe(200)
    component.size = 272
    expect(component.thumbnailSize).toBe(400)
    component.size = 472
    expect(component.thumbnailSize).toBe(800)
    component.size = 872
    expect(component.thumbnailSize).toBe(1600)
  })

  it('should be display image', () => {
    const mockImage: Image = {
      id: '123',
      createdDate: undefined,
      updatedDate: undefined,
      fileName: undefined,
      url: undefined,
      fullUrl: 'http://localhost',
      thumbnails: []
    }
    component.image = 'string'
    expect(component.displayImage).toBe('-x100.string')
    component.thumbnails = []
    component.origin = 'origin'
    component.image = null
    expect(component.displayImage).toBe('origin')
  })
})
