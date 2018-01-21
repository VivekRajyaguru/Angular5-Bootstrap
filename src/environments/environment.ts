// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAvJvR0nGt9hfQEj5lx5rA7iSuOPcAOleU',
    authDomain: 'fir-demo-874da.firebaseapp.com',
    databaseURL: 'https://fir-demo-874da.firebaseio.com',
    projectId: 'fir-demo-874da',
    storageBucket: '',
    messagingSenderId: '612095012857'
  },
  apiEndpoint: 'http://localhost:9090/',
  imageEndpoint: 'http://locahost:9090/'
};
