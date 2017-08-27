export const Role = {
  admin: 'Admin',
  user: 'User',
  journalist: 'Journalist'
}

export const AuthGrantType = {
  RefreshToken: 'refresh_token',
  AuthorizationCode: 'authorization_code',
  Password: 'password',
}

export enum PressReleaseStatus {
  pending = 0,
  rejected = 1,
  published = 2,
}

export enum SortDirection {
  ascending = 0,
  descending,
}

export enum PressConferenceStatus {
  planning = 0,
  started = 1,
  finished = 2,
  cancelled = 3,
}

export const ParticipantStatus = {
  pending: 'Pending',
  paticipant: 'Participant',
  rejected: 'Rejected',
}
