export const environment = {
  production: true,

  resourceApiUrl: 'https://api.iagency.com.vn',
  accountPortalUrl: 'https://iagency.com.vn',
  adminPortalUrl: 'https://admin.iagency.com.vn',
  organizationPortalUrl: 'https://organization.iagency.com.vn',
  mediaPortalUrl: 'https://reporter.iagency.com.vn',

  authenticationUrl: 'https://iagency.com.vn/auth/login?clientId={clientId}&redirectUri={redirectUri}&targetUri={targetUri}',
  logoutUrl: 'https://iagency.com.vn/auth/logout?redirectUri={redirectUri}',
  profileUrl: 'https://iagency.com.vn/account',

  clientIdAdmin: 'webAdmin',
  clientSecretAdmin: '901564A5-E7FE-42CB-B10D-61EF6A8F3654',
  openIdRedirectUrlAdmin: 'https://api.iagency.com.vn/connect/redirect/admin',

  clientIdMedia: 'webMedia',
  clientSecretMedia: '717126FA-C0ED-45C9-B315-98F2DF50D331',
  openIdRedirectUrlMedia: 'https://api.iagency.com.vn/connect/redirect/media',

  clientIdOrganization: 'webOrganization',
  clientSecretOrganization: 'F83B14F2-A3CE-4648-BF65-DDC382766FE6',
  openIdRedirectUrlOrganization: 'https://api.iagency.com.vn/connect/redirect/organization'
}
