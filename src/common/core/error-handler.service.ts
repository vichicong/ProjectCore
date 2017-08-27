import { Injectable } from '@angular/core'
import { Response } from '@angular/http'
import { Router } from '@angular/router'

import { SessionService } from './session.service'
import { AppConfig } from 'common/app.config'
import { getAuthUrl } from 'common/utils'

@Injectable()
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private appConfig: AppConfig,
  ) {}

  handleHttpError(response: Response) {
    switch (response.status) {
      case 401:
        this.sessionService.remove(['openid', 'access_token', 'expiration_date'])
        const authenticationUrl = getAuthUrl(this.appConfig.clientId, this.appConfig.openIdRedirectUri)
        window.location.href = authenticationUrl
        break
      case 403:
        this.router.navigate(['/error/403'])
        break
      default:
        break
    }
  }

}
