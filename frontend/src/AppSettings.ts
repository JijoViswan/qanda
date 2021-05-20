export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021j-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021j-backend-staging.azurewebsites.net'
    : 'https://localhost:44335';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-habitat.us.auth0.com',
  client_id: '2eOQ0DjBUR0gyEsS59zlG4iStpyRnn3B',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
