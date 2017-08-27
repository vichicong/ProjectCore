import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(url: string, size: number): string {
    if (!url) {
      return
    }
    if (typeof (url) !== 'string') {
      return
    }
    const fileName = url.slice(0, url.lastIndexOf('.'))
    const ext = url.slice(url.lastIndexOf('.') + 1)
    return `${fileName}-x${size}.${ext}`
  }

}
