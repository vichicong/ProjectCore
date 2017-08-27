import { PressConferenceStatus } from './enums'

export interface UserData {
  email: string
  accessList: Array < string >
  role: string
  id: string
  profileImage: string
  firstName: string
  lastName: string
}

export interface SessionData {
  accessToken: string
  refreshToken: string
  idToken: string
  expirationDate: Date
  expiresIn: number
  userData: UserData
}

export interface Asset extends ViewModel {
  fileName: string
  url: string | Blob | File
  fullUrl: string | Blob | File
}

export interface Image extends ViewModel {
  fileName: string
  url: string | Blob | File
  fullUrl: string | Blob | File
  thumbnails: string[]
}

export interface ViewModel {
  id: string
  createdDate: string
  updatedDate: string
}

export interface BackendError {
  validationErrors: {
    [fieldName: string]: string[]
  }
  messages: string[]
}

export interface Category extends ViewModel {
  name: string
}

export interface Industry extends ViewModel {
  name: string
}

export interface SmtpConfig {
  host: string
  port: number
  sslEnabled: boolean
  loginName: string
  password: string
}

export interface EmailTemplate extends ViewModel {
  name: string
  accessKey: string
  emailSubject: string
  emailContent: string
}

export interface QueryResult<T> {
  count: number
  items: Array<T>
}

export interface Account extends ViewModel {
  firstName: string
  lastName: string
  profileImage?: Image
  profileImageUrl?: string
  email: string
  password: string
  role?: string
  status: boolean
  phoneNumber: string
}

export interface OpenIdProfile {
  sub: string
  jti: string
  useage: string
  at_hash: string
  nbf: number
  exp: number
  iat: number
  iss: string
  family_name: string
  given_name: string
  email: string
  unique_name: string
  email_confirmed: boolean
  profile_image: string
  role: string
  organization_id: string
  newspaper_id: string
  own_organization_id: string
  own_newspaper_id: string
}

export interface OpenIdGrantResult {
  access_token: string
  refresh_token?: string
  id_token?: string
  expires_in?: number
  resource?: string
  error?: string
  error_description?: string
}

export interface JournalistInfo extends Account {
  jobTitle: string
  biography: string
  newspaper: Newspaper
}

export interface UserInfo extends Account {
  organization: Organization
}

export interface Organization extends ViewModel {
  name: string
  owner: Account
  users: Account[]
  industry: Industry
  logoImage: Asset
  logoImageUrl: string
  website: string
  address: string
  phoneNumber: string
  description: string
}

export interface Newspaper extends ViewModel {
  name: string
  address: string
  phoneNumber: string
  website: string
  logoImage: Image
  logoImageUrl: string
  journalists: Account[]
  newspaperCategories: NewspaperCategory[]
}

export interface NewspaperCategory extends ViewModel {
  category: Category
  newspaperId: string
}

export interface PressRelease extends ViewModel {
  title: string
  content: string
  category: Category
  images?: Asset[]
  organization?: Organization
  description: string
  contactPoint: string
}

export interface PressReleaseNewspapers extends ViewModel {
  newspapers: Newspaper[]
  pressReleaseId: string
}

export interface PressConference extends ViewModel {
  name: string
  description: string
  startTime: Date
  duration: number
  organization: Organization
  status: PressConferenceStatus
}

export interface OrganizationPeople {
  organizationId: string
  account: Account
  memberType: number
}
