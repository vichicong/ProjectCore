import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Injectable()
export class SeoService {

  private suffix: string

  constructor(
    private title: Title,
  ) {
    this.suffix = 'Intelligent Agency'
  }

  set(pageTitle: string) {
    if (!pageTitle) {
      this.title.setTitle(this.suffix)
      return
    }
    this.title.setTitle(`${pageTitle} | ${this.suffix}`)
  }

}
