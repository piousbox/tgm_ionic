import { environment } from '../environments/environment';

export class AppRouter {
  static citiesPath = "/en/cities";
  static cityPath = (c) => `/en/cities/travel-to/${c.cityname}`;
  
  static homefeedPath = 'en';
  static newsfeedPath = 'en/news';
  static rootPath = '';
}

export class ApiRouter {
  static account                 = `${environment.api_domain}/api/my/account`;
  static citiesindex             = `${environment.api_domain}/api/cities.json`;
  static doPurchase              = `${environment.api_domain}/api/do_purchase`;
  static galleriesShow = (slug) => `${environment.api_domain}/api/galleries/view/${slug}`;
  static getStars                = `${environment.api_domain}/api/stars/buy`;
  static homefeed                = `${environment.api_domain}/api/sites/view/${environment.domain}`;
  static longTermToken = (d)    => `${environment.api_domain}/api/users/long_term_token.json?accessToken=${d.shortTermToken}`;
  static map           = (slug) => `${environment.api_domain}/api/maps/view/${slug}`;
  static marker        = (slug) => `${environment.api_domain}/api/markers/view/${slug}`;
  static newsfeed                = `${environment.api_domain}/api/my/newsitems`;

  static report        = (r)    => `${environment.api_domain}/api/reports/view/${r['reportname']}`;
};
