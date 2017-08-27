import { omitBy, isUndefined, range } from 'lodash'

export const isNotNull = a => a != null

export const merge = (...args) => Object.assign({}, ...args)

export const mergeAndRemoveUndefined = (...args) =>
  omitBy(merge(...args), isUndefined)

export const enumerate = (obj: any): Array<string> => {
  return Reflect.ownKeys(obj)
    .filter(k => !isNaN(+obj[k]))
    .map(k => k.toString())
}

export const enumToDictionary = (obj: any): Array<{key: string, value: number}> =>
  enumerate(obj).map(k => ({
    key: k,
    value: obj[k]
  }))

export const defaultValue = (defaultVal, val) => {
  return isNotNull(val) ? val : defaultVal
}

export const generatePagesArray = (pageToShow: number, totalPage: number, currentPage: number): Array<number> => {
  if (pageToShow > totalPage) {
    return range(1, totalPage + 1)
  }

  const from = currentPage - Math.floor(pageToShow / 2)
  if (from <= 1) {
    return range(1, pageToShow + 1)
  }

  const to = currentPage + Math.floor(pageToShow / 2)
  if (to > totalPage) {
    return range(totalPage - pageToShow + 1, totalPage + 1)
  }

  if (pageToShow % 2) {
    return range(from, to + 1)
  }

  return range(from + 1, to + 1)
}

export const sortByOrderNumber = (arr?: Array<any>) => {
  return (arr || []).sort((a, b) => a.orderNumber - b.orderNumber)
}
