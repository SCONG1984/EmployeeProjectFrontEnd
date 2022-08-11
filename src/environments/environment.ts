// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiRunType: 'iis_express', //docker, iis_express, iis, cloud
  baseUrl: 'https://localhost:5001/api',

  dockerBaseUrl: 'https://localhost:5001/api',
  iisExpressBaseUrl: 'https://localhost:44315/api',
  iisBaseUrl: 'http://localhost:8199/api',
  cloudBaseUrl: 'https://stockmgmtapiapp.azurewebsites.net/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
