import { environment } from 'common/environments/environment'
import { Role } from 'common/types'

export const getAuthUrl = (clientId: string, openIdRedirectUrl: string) => {
  const authenticationUrl = environment.authenticationUrl.replace('{clientId}', clientId)
    .replace('{redirectUri}', openIdRedirectUrl)
    .replace('{targetUri}', encodeURIComponent(window.location.href))
  return authenticationUrl
}
