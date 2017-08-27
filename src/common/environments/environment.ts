export const environment = {
  production: false,
  resourceApiUrl: 'http://localhost:5010',
  accountPortalUrl: 'http://localhost:4200',
  adminPortalUrl: 'http://localhost:4201',
  organizationPortalUrl: 'http://localhost:4202',
  mediaPortalUrl: 'http://localhost:4203',

  authenticationUrl: 'http://localhost:4200/auth/login?clientId={clientId}&redirectUri={redirectUri}&targetUri={targetUri}',
  logoutUrl: 'http://localhost:4200/auth/logout?redirectUri={redirectUri}',
  profileUrl: 'http://localhost:4200/account',

  clientIdAdmin: 'webAdmin',
  clientSecretAdmin: '901564A5-E7FE-42CB-B10D-61EF6A8F3654',
  openIdRedirectUrlAdmin: 'http://localhost:5010/connect/redirect/admin',

  clientIdMedia: 'webMedia',
  clientSecretMedia: '717126FA-C0ED-45C9-B315-98F2DF50D331',
  openIdRedirectUrlMedia: 'http://localhost:5010/connect/redirect/media',

  clientIdOrganization: 'webOrganization',
  clientSecretOrganization: 'F83B14F2-A3CE-4648-BF65-DDC382766FE6',
  openIdRedirectUrlOrganization: 'http://localhost:5010/connect/redirect/organization'

}
