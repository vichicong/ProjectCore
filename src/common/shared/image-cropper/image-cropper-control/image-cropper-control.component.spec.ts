import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BsModalMockDirective, mockComponent } from 'common/testutils'
import { ImageCropperControlComponent } from './image-cropper-control.component'

describe('ImageCropperControlComponent', () => {
  let component: ImageCropperControlComponent
  let fixture: ComponentFixture<ImageCropperControlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BsModalMockDirective,
        ImageCropperControlComponent,
        mockComponent({ selector: 'image-cropper-modal', inputs: ['settings', 'cropperOptions'] }),
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperControlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
