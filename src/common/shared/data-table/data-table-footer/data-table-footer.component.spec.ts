import { ActivatedRoute } from '@angular/router'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DataTableFooterComponent } from './data-table-footer.component'
import { mockComponent, ActivatedRouteStub } from 'common/testutils'

describe('DataTableFooterComponent', () => {
  let component: DataTableFooterComponent
  let fixture: ComponentFixture<DataTableFooterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      declarations: [
        mockComponent({
          selector: '[routerLink]',
          inputs: ['routerLink']
        }),
        DataTableFooterComponent,
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableFooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

})
