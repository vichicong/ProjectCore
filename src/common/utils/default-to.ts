/**
 * default value if first param is not present
 */
export const defaultTo = (a, b) => {
  if (typeof a === 'undefined') {
    return b
  }

  if (typeof a === 'object' && !(a instanceof Array)) {
    return Object.assign({}, b, a)
  }

  return a
}
