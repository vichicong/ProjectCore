import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { DataTableQuantityComponent } from './data-table-quantity.component'

describe('DataTableQuantityComponent', () => {
  let component: DataTableQuantityComponent
  let fixture: ComponentFixture<DataTableQuantityComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DataTableQuantityComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableQuantityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
