export const getThumbnail = (thumbnails: string[], size: number) => {
  let sizedThumbnail
  thumbnails.forEach(t => {
    const index1 = t.lastIndexOf('-x')
    const index2 = t.lastIndexOf('.')
    // tslint:disable-next-line:radix
    const sizeNumber = parseInt(t.substring(index1 + 2, index2))

    if (size === sizeNumber) {
      sizedThumbnail = t

      return
    }
  })
}

export const getThumbnailFromUrl = (url: any, size: number) => {
  const lastIndexOfDot = url.lastIndexOf('.')
  const prefix = url.substring(0, lastIndexOfDot)
  const ext = url.substring(lastIndexOfDot + 1, url.length)
  return `${prefix}-x${size}.${ext}`
}
