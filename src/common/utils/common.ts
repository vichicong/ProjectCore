import { range as _range } from 'lodash'
export * from './form-sender'
export * from './diff-object'
export * from './form-url-encode'

/**
 * convert typescript enum to array of string
 * @param {object} _enum Ts enum type
 */
export const enumFuntor = (_enum: Object) => {
  return Object.keys(_enum)
    .filter(key => isNaN(parseInt(key, 10)))
}

export const enumMemberName = (_enum: Object, memberValue) => {
  return enumFuntor(_enum).filter(t => _enum[t] === memberValue)[0]
}

export const otherTo = (source: Array<any>, des: Array<any>) => {
  return source.filter(it => des.indexOf(it) < 0)
}

export const getCodeFromParam = (param: string) => {
  const match = param.match(/\-(\d+)$/gi)
  if (!match) {
    return
  }
  return match[0].replace('-', '')
}

export const beautyGuid = (guid: string) => {
  return guid.toUpperCase()
    .match(/.{1,4}/g)
    .join('-')
}

export const getInitials = (lastName: string, firstName?: string) => {
  if (!lastName) {
    return
  }
  lastName = lastName.trim()
  lastName = lastName.replace('-', ' ').replace('_', ' ')
  const fragsLastName = lastName.split(/\s+/g)
  let lastLetter = ''
  let firstLetter = ''
  if (fragsLastName) {
    lastLetter = fragsLastName[fragsLastName.length - 1][0]
  }
  if (!firstName || firstName.length === 0) {
    firstLetter = fragsLastName.length > 1 ? fragsLastName[0][0] : ''
  } else {
    firstName = firstName.trim().replace('-', ' ').replace('_', ' ')
    const fragsFirstName = firstName.split(/\s+/g)
    if (fragsFirstName) {
      firstLetter = fragsFirstName[fragsFirstName.length - 1][0]
    }
  }
  return `${firstLetter}${lastLetter}`
}

/**
 * calculate date
 * @param {string} comp can take one of: day, month, year, hours, minutes, seconds
 */
export function addDate(date: Date, comp: string, value: number): Date {
  const [getter, setter] = {
    'day': ['getDate', 'setDate'],
    'month': ['getMonth', 'setMonth'],
    'year': ['getFullYear', 'setFullYear'],
    'hour': ['getHours', 'setHours'],
    'minute': ['getMinutes', 'setMinutes'],
    'second': ['getSeconds', 'setSeconds'],
  }[comp]

  if (!getter || !setter) {
    throw new Error('Date: Cannot calculate this component')
  }

  const ret = new Date(+date)
  ret[setter](ret[getter]() + value)
  return ret
}

export const camelCaseToParam = (camel: string = ''): string =>
  camel.replace(
    /(.)([A-Z])/g,
    (_, l1, l2) => `${l1}-${l2.toLowerCase()}`
  )

export function range<T>(start, end, step?) {
  return _range(start, end, step)
    .map(_ => ({} as T))
}
