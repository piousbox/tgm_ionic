
import { environment } from '../environments/environment';


export class AppRouter {
  static homefeedPath = 'homefeed';
  static rootPath = 'newsfeed';
}

export class ApiRouter {
  static homefeed = `${environment.api_domain}/api/sites/view/piousbox.com.json`;
}
