import Cropper from 'cropperjs'
import { SortDirection } from './enums'

export interface Breadcrumb {
  text: string
  path?: Array < string >
  isPlain?: boolean
}

export interface CtaButton {
  name: string
  caption: string
  path: Array < string >
  className: Array < string >
}

export interface MenuItem {
  title: string
  icon?: string
  path?: string[]
  href?: string
  children?: MenuItem[]
  exact?: boolean
  hidden?: boolean
  roles?: string[]
}

export interface ImageCropperSetting {
  width: number
  height: number
}

export interface ImageCropperResult {
  imageData: Cropper.ImageData
  cropData: Cropper.CropBoxData
  blob?: Blob
  dataUrl?: string
}

export interface DataTableAccessorData<T> {
  items: Array<T>
  paging: {
    page: number,
    quantity: number,
    total: number,
    sortBy: string,
    sortDirection: SortDirection,
  }
  filter: any
}
