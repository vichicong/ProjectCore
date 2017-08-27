import { Asset } from './models'

export interface UpdateProfileRequest {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
}

export interface ChangeEmailRequest {
  newEmailAddress: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

export interface ResetPasswordRequest {
  emailAddress: string
  resetPasswordToken: string
  newPassword: string
}

export interface CreateAcountRequest {
  firstName: string
  lastName: string
  email: string
  role: string
  phoneNumber: string
  password: string
  profileImage: Asset
}

export interface UpdateAccountRequest {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  profileImage: Asset
}

export interface UpdateOwnAccountRequest {
  firstName: string
  lastName: string
  phoneNumber: string
  profileImage?: Asset
}
