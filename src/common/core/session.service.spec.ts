import { TestBed, inject } from '@angular/core/testing'

import { SessionService } from './session.service'
import { storage } from 'common/utils'

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: storage, useValue: { set: () => {} } }
      ]
    })
  })

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy()
  }))

  it('#refreshSession should be refresh session data', inject([SessionService, storage], (service: SessionService) => {
    spyOn(storage, 'set')
    service.refreshSession({ mockKey: 'mockKey'})
    expect(storage.set).toHaveBeenCalledWith('IntelligentAgency', { mockKey: 'mockKey' })
  }))

  it('#set should be set value of input key to lacalstorage', inject([SessionService, storage], (service: SessionService) => {
    spyOn(storage, 'set')
    service.set('mockKey', 'mockKey')
    expect(storage.set).toHaveBeenCalledWith('IntelligentAgency', { mockKey: 'mockKey' })
  }))

  it('#setValues should be set values to localstorage', inject([SessionService, storage], (service: SessionService) => {
    spyOn(storage, 'set')
    service.setValues({['mockKey']: 'mockKey', ['mockey2']: 'mockey2'})
    expect(storage.set).toHaveBeenCalledWith('IntelligentAgency', { mockKey: 'mockKey', mockey2: 'mockey2' })
  }))

  it('#remove should be remove values to localstorage', inject([SessionService, storage], (service: SessionService) => {
    spyOn(storage, 'set')
    service.remove(['mockKey'])
    expect(storage.set).toHaveBeenCalledWith('IntelligentAgency', { mockKey: undefined })
  }))

})
