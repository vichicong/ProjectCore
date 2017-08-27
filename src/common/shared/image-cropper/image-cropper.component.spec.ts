import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BsModalMockDirective, mockComponent, ConfirmationMockComponent } from 'common/testutils'
import { ImageCropperComponent } from './image-cropper.component'

describe('ImageCropperComponent', () => {
  let component: ImageCropperComponent
  let fixture: ComponentFixture<ImageCropperComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BsModalMockDirective,
        ConfirmationMockComponent,
        ImageCropperComponent,
        mockComponent({ selector: 'image-cropper-modal', inputs: ['settings', 'cropperOptions'] }),
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
