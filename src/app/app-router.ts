
import { environment } from '../environments/environment';


export class AppRouter {
  static homefeedPath = 'homefeed';
  static rootPath = 'newsfeed';
}

export class ApiRouter {
  static homefeed = `${environment.api_domain}/api/sites/view/piousbox.com.json`;
  static citiesindex = `${environment.api_domain}/api/cities.json`;
  static longTermToken = (delta) => {
    return `${environment.api_domain}/api/users/long_term_token.json?accessToken=${delta.shortTermToken}`;
  }
}
