import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { AppConfig } from 'common/app.config'
import { getAuthUrl } from 'common/utils'
import { SessionService } from 'common/core'

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private appConfig: AppConfig
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true
  }
}
