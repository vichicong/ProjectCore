/**
 * one level interpolate string
 */
export const interpolate = (template: string, data: Object | Array<any> = {}): string => {
  const ret = template.replace(/\{\s*([^\}]+)\s*\}/g, (_match, key) => {
    key = key.trim()
    if (!(/^\w+$/).test(key)) {
      throw new Error(`Template string parse failed at key \"${key}\". Template: ${template}`)
    }

    return data[key] === undefined ? '' : data[key]
  })

  return ret
}
