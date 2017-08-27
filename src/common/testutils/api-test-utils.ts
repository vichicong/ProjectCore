import { XHRBackend, Response, ResponseOptions } from '@angular/http'
import { MockBackend } from '@angular/http/testing'
import { AppConfig } from 'common/app.config'

export const createResponse = (responseBody: any) => {
  return new Response(new ResponseOptions({
    body: JSON.stringify(responseBody)
  }))
}

export const mockResponse = (backend: MockBackend, responseBody: any) => {
  backend.connections.subscribe((conn) => {
    conn.mockRespond(createResponse(responseBody))
  })
}

export const apiServiceTestProviders = [
  { provide: AppConfig, useValue: { resourceApiUrl: 'http://localhost:10000' } },
  { provide: XHRBackend, useClass: MockBackend }
]
