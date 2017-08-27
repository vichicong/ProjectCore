import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'error'
})

export class ErrorPipe implements PipeTransform {

  constructor() {}

  transform(value: any, args?: any): any {
    return value.toLowerCase()
  }

}
