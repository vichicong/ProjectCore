import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from 'common/environments/environment'
const loadUrl = (url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'text'
    xhr.onload = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = url
      document.head.appendChild(link)
      resolve()
    }

    xhr.onerror = reject
    xhr.open('get', url, true)
    xhr.send()
  })

loadUrl('//fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700&subset=vietnamese')

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
