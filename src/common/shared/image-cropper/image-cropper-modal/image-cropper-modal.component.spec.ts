import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ImageCropperModalComponent } from './image-cropper-modal.component'
import { LoadingComponent, } from 'common/core'

describe('ImageCropperModalComponent', () => {
  let component: ImageCropperModalComponent
  let fixture: ComponentFixture < ImageCropperModalComponent >

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [

      ],
      declarations: [
        ImageCropperModalComponent,
        LoadingComponent,
      ],
      imports: [

      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should be load image error', () => {
    const event = <Event>{}
    component.imageLoadError(event)
    expect(component.loadError).toBe(true)
    expect(component.isLoading).toBe(false)
  })

  it('should be load image', () => {
    component.imageUrl = 'image url'
    component.loadImage('imageurl')
    expect(component.isLoading).toBe(true)
  })

})
