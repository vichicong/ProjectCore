import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'

export interface IUploadProgress {
  total: number
  loaded: number
}

export interface IUploader {
  progress: Observable<IUploadProgress>
    response: Observable<any>
    abort: Function
  send: Function
  pending: boolean
}

export const sendFormData = (url, formData: FormData, headers ?: Object) => {
  const ret = {
    pending: true,
  } as IUploader

  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  if (headers) {
    Object.keys(headers).forEach(name => {
      xhr.setRequestHeader(name, headers[name])
    })
  }

  ret.progress = Observable.create((observer: Observer < IUploadProgress > ) => {
    xhr.upload.onprogress = (event) => {
      observer.next({
        total: event.total,
        loaded: event.loaded,
      })
    }
  })

  ret.response = Observable.create((observer: Observer < any > ) => {
    xhr.onload = (_event: any) => {
      ret.pending = false
      if (xhr.status !== 200) {
        observer.error({
          message: xhr.response,
          statusCode: xhr.status,
        })
        observer.complete()
        return
      }

      try {
        observer.next(JSON.parse(xhr.response))
      } catch (e) {
        observer.error(e)
      }
      observer.complete()
    }

    xhr.onerror = (event) => {
      ret.pending = false
      observer.error(event)
    }
  })

  ret.abort = () => {
    ret.pending = false
    xhr.abort()
  }

  ret.send = () => {
    ret.pending = true
    xhr.send(formData)
    return ret
  }

  return ret
}
