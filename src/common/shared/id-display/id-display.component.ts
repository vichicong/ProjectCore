import { Component, Input } from '@angular/core'
import { Image } from 'common/types'
import { getInitials, getThumbnail, getThumbnailFromUrl } from 'common/utils'

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[id-display]',
  templateUrl: './id-display.component.html',
  styleUrls: ['./id-display.component.scss']
})

export class IdDisplayComponent {

  @Input('id-display') image: Image | string // pass full Asset object
  @Input() square: boolean
  @Input() noTooltip: boolean
  @Input('thumbnails') thumbnails: string[]
  @Input('origin') origin: string
  @Input() tooltipText: string
  @Input() displayName: string
  @Input() supplementName: string
  @Input('size') size = 50
  @Input('fontSize') fontSize = 14

  constructor() {}

  get tooltip(): string {
    return this.tooltipText || `${this.supplementName ?  (this.supplementName + ' ') : ''}${this.displayName}`
  }

  get displayImage(): any {
    if (this.image) {
      if (typeof this.image === 'string' || this.image instanceof String) {
        return getThumbnailFromUrl(this.image, this.thumbnailSize)
      }
      return getThumbnail(this.image.thumbnails, this.thumbnailSize) || this.image.fullUrl
    }
    if (this.thumbnails) {
      return getThumbnail(this.thumbnails, this.thumbnailSize) || this.origin
    }
  }

  get initials(): string {
    return getInitials(this.displayName, this.supplementName)
  }

  get initialClass(): string {
    const classCode = this.hashed(this.displayName) % 10
    return `id-initial-class-${classCode}`
  }

  get thumbnailSize(): number {
    if (this.size <= 100) {
      return 100
    }
    if (this.size <= 200) {
      return 200
    }
    if (this.size <= 400) {
      return 400
    }
    if (this.size <= 800) {
      return 800
    }
    if (this.size <= 1600) {
      return 1600
    }
  }

  private hashed(str: string) {
    let hash = 0,
      i, chr, len
    if (str.length === 0) {
      return hash
    }
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i)
      // tslint:disable-next-line:no-bitwise
      hash = ((hash << 5) - hash) + chr
      // tslint:disable-next-line:no-bitwise
      hash |= 0
    }
    return hash
  }

}
