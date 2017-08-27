/**
 * one level interpolate string
 */
export const parseError = (reason: any[], context ?: string): string => {
  if (reason && reason.length) {
    const first = reason[0]
    const bits: string[] = []
    bits.push('error-code')
    if (context) {
      bits.push(context)
    }
    if (first.field) {
      bits.push(first.field)
    }
    if (first.errorCode) {
      bits.push(first.errorCode)
    }
    return bits.join('-')
  }

  return 'error-code-unknown'
}
