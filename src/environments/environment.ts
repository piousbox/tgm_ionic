// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  // googleWebClientId: "287149765762-et09dr4cgie1fisfp7ii664hqi90635i.apps.googleusercontent.com",
  // googleWebClientId: "287149765762-3i1re70h0f9n19959dj73qf19md9c8c6.apps.googleusercontent.com",
  // googleWebClientId: "287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97.apps.googleusercontent.com",
  googleWebClientId: "287149765762-o6jb2tlv93qejrpo5km8ihe2n7rrtuc7.apps.googleusercontent.com",
  newsitemsPath: 'http://localhost:3000/api/my/newsitems',
  // newsitemsPath: 'https://manager.piousbox.com/api/my/newsitems',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
