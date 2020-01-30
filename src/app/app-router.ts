import { environment } from '../environments/environment';

export class AppRouter {
  static homefeedPath = 'homefeed';
  static rootPath = 'homefeed';
}

export class ApiRouter {
  static account = `${environment.api_domain}/api/my/account`;
  static citiesindex = `${environment.api_domain}/api/cities.json`;
  static homefeed = `${environment.api_domain}/api/sites/view/${environment.domain}`;
  static longTermToken = (delta) => {
    return `${environment.api_domain}/api/users/long_term_token.json?accessToken=${delta.shortTermToken}`;
  };
  static newsitems = `${environment.api_domain}/api/my/newsitems`;
}
