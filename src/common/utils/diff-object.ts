import { isString, isUndefined, isNumber, flatten } from 'lodash'

export const isImageCrop = obj => typeof obj === 'object' && obj.hasOwnProperty('croppedUrl')

export const isDate = d => !isNaN(+new Date(d))

const isPrimitive = a => isDate(a) || isNumber(a) || isString(a) || isImageCrop(a)

const isValueEqual = (a, b) => {
  if (typeof a !== typeof b) {
    return false
  }

  if (isImageCrop(a) && isImageCrop(b)) {
    return a.croppedUrl === b.croppedUrl
  }

  return a === b
}

const diffValue = (obj1, obj2, field ? ) => {
  if (isValueEqual(obj1, obj2)) {
    return
  }

  return [{
    type: 'update',
    field,
    from: obj1,
    to: obj2,
  }]
}

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

export const diffObject = (object1, object2, field ? ) => {
  if (isUndefined(object1) && isPrimitive(object2)) {
    return [{
      field,
      type: 'add',
      to: object2,
    }]
  }

  if (isPrimitive(object1) && isUndefined(object2)) {
    return [{
      field,
      type: 'delete',
      from: object1,
    }]
  }

  if (isPrimitive(object1) && isPrimitive(object2)) {
    return diffValue(object1, object2, field)
  }

  if (object1 instanceof Array && object2 instanceof Array) {
    if (isArrayEqual(object1, object2)) {
      return
    }
  }

  const keys1 = Object.keys(object1)
  const allKeys = [
    ...keys1,
    ...Object.keys(object2).filter(n => keys1.indexOf(n) < 0),
  ]

  let changes = allKeys.map(key => {
    const from = object1[key]
    const to = object2[key]
    return diffObject(from, to, key)
  }).filter(i => !!i)

  changes = flatten(changes)
    .map((item: any) => {
      const fieldNames = [
          field,
          item.field,
        ].filter(i => !!i)
        .join('.')

      return Object.assign({}, item, {
        field: fieldNames,
      })
    })

  return changes
}
