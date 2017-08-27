import { Injectable, Injector } from '@angular/core';
import { BaseApi } from './base-api.service';

@Injectable()
export class PostApi extends BaseApi<any> {

  constructor(injector: Injector) {
    super(injector)
    this.baseUrl = this.appConfig.resourceApiUrl + '/event/getLatest'
  }

}
