import { Http, RequestOptionsArgs, Headers, Response } from '@angular/http'
import { Injector } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'

import { AppConfig } from 'common/app.config'
import { SessionService, ErrorHandlerService } from 'common/core'
import {
  formUrlEncode as paramize,
  defaultTo,
  sendFormData,
  IUploader
} from 'common/utils'
import { QueryResult, SortDirection } from 'common/types'

export class BaseApi<T> {

  protected appConfig: AppConfig = this.injector.get(AppConfig)
  protected baseUrl: string
  protected errorHandler: ErrorHandlerService = this.injector.get(ErrorHandlerService)
  protected http: Http = this.injector.get(Http)
  protected router: Router = this.injector.get(Router)
  protected sessionService: SessionService = this.injector.get(SessionService)

  constructor(
    protected injector: Injector,
  ) {}

  setBaseUrl(url: string) {
    if (url.match(/^https?:\/\//)) {
      this.baseUrl = url
      return
    }
    this.baseUrl = this.appConfig.resourceApiUrl + url
  }

  query(params: {
    skip?: number,
    take?: number,
    sortBy?: string,
    sortDirection?: SortDirection,
    query?: string,
  }) {
    params = defaultTo(params, {
      skip: 0,
      take: 10,
      sortDirection: SortDirection.descending,
      sortBy: 'createdDate',
      query: ' ',
    })
    if (!params.query || params.query === '') {
      params.query = ' '
    }
    return this.get('/query/:skip/:take/:sortBy/:sortDirection/:query', params) as Observable<QueryResult<T>>
  }

  getOne(id: string) {
    return this.get('/:id', {
      id
    }) as Observable<T>
  }

  create(data: any) {
    return this.post('/', undefined, data) as Observable<T>
  }

  update(data: any) {
    return this.put('/', undefined, data)
  }

  remove(id: string) {
    const url = this.createUrl('/:id', {
      id
    })
    return this.request(url, {
      method: 'delete'
    })
  }

  removeByUrl(url: string) {
    return this.request(url, {
      method: 'delete'
    })
  }

  protected sendForm(url, formData): IUploader {
    const endpoint = this.baseUrl + url
    const accessToken = this.sessionService.accessToken
    const headers = {
      authorization: `Bearer ${accessToken}`,
    }
    return sendFormData(endpoint, formData, headers)
  }

  protected get(url, params ? ) {
    url = this.createUrl(url, params)
    return this.request(url, {
      method: 'get'
    })
  }

  protected post(url, params ? , body ? ) {
    url = this.createUrl(url, params)
    return this.request(url, {
      body: JSON.stringify(body),
      method: 'post',
    })
  }

  protected put(url, params ? , body ? ) {
    url = this.createUrl(url, params)
    return this.request(url, {
      method: 'put',
      body: JSON.stringify(body),
    })
  }

  protected postFormEncoded(url, body, params ? ) {
    url = this.createUrl(url, params)
    return this.request(url, {
      body: paramize(body),
      method: 'post',
    }, 'application/x-www-form-urlencoded')
  }

  protected request(url, options: RequestOptionsArgs = {}, contentType = 'application/json') {
    return this.http.request(url, this.setHeader(options, contentType))
      .map(response => {
        try {
          return response.json()
        } catch (e) {
          return response
        }
      })
      .catch((response: Response) => {
        this.errorHandler.handleHttpError(response)
        try {
          return Observable.throw(response.json())
        } catch (e) {
          return Observable.throw(response)
        }
      })
  }

  private setHeader(options: RequestOptionsArgs, contentType: string): RequestOptionsArgs {
    options = options || {}
    options.headers = options.headers || new Headers()

    options.headers.delete('Content-Type')
    options.headers.append('Content-Type', contentType)

    const accessToken = this.sessionService.accessToken
    if (accessToken) {
      options.headers.append('Authorization', 'Bearer ' + accessToken)
    }
    return options
  }

  protected createUrl(
    pattern: string,
    params: Object = {},
  ): string {
    const serializeArray = (key, arr) => arr.map(it => `${key}=${it}`).join('&')

    const query = (key: string) => {
      if (typeof params[key] === 'undefined' || params[key] === null) {
        return ''
      }

      if (params[key] instanceof Array) {
        return `&${serializeArray(key, params[key])}`
      }

      if (params[key] instanceof Date) {
        return `&${key}=${params[key].toISOString()}`
      }

      return `&${key}=${encodeURIComponent(params[key])}`
    }

    const str = pattern.replace(/([:\?])(\w+)/g, (_match, indicator, key) => {
      if (indicator === ':') {
        return params[key] == null ? ' ' : params[key]
      }

      if (indicator === '?') {
        return query(key)
      }

      return ''
    })

    return this.baseUrl + str.replace(/\&/, '?')
  }

}
