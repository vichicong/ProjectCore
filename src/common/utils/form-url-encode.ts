/**
 * convert object to form-urlencoded string
 */
export const formUrlEncode = (body: Object | string) => {
  if (typeof body === 'string') {
    return body
  }

  const transform = (key, value) => {
    // tslint:disable-next-line
    if (typeof value === 'undefined' || value === null) {
      return
    }

    if (value instanceof Array) {
      return value.map((it, index) => `${transform(`${key}[${index}]`, it)}`)
        .filter(i => !!i)
        .join('&')
    }

    if (typeof value === 'object') {
      return Object.keys(value)
        .map(k => {
          const it = value[k]
          const ret = transform(`${key}[${k}]`, it)
          return ret ? ret : undefined
        })
        .filter(i => !!i)
        .join('&')
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }

  const ret = Object.keys(body)
    .map(key => {
      const value = body[key]
      return transform(key, value)
    })
    .filter(it => !!it)
    .join('&')
  return ret
}
