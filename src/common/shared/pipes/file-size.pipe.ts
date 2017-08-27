import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {

  constructor() {}

  transform(bytes: number, precision?: number): any {
    if (isNaN(bytes) || !isFinite(bytes) || bytes === 0) {
      return '---'
    }
    if (typeof precision === 'undefined') {
      precision = 1
    }
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
          number = Math.floor(Math.log(bytes) / Math.log(1024))
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number]
  }

}
