export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021j-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021j-backend-staging.azurewebsites.net'
    : 'https://localhost:44335';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'your-tenant-id.auth0.com',
  client_id: 'your-client-id',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
