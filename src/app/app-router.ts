import { environment } from '../environments/environment';

export class AppRouter {
  static homefeedPath = 'homefeed';
  static rootPath = 'homefeed';
  static reportPath = '/en/reports/show/:reportname';
  static reportLink = (r) => `/en/reports/show/${r}`;
}


export class ApiRouter {
  static account = `${environment.api_domain}/api/my/account`;
  static citiesindex = `${environment.api_domain}/api/cities.json`;
  static homefeed = `${environment.api_domain}/api/sites/view/${environment.domain}`;
  static longTermToken = (d) => `${environment.api_domain}/api/users/long_term_token.json?accessToken=${d.shortTermToken}`;
  static newsitems = `${environment.api_domain}/api/my/newsitems`;
  static report = (r) => `${environment.api_domain}/api/reports/view/${r['reportname']}`;
};
