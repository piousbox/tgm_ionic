import { environment as env } from '../environments/environment';

export const C = {
  defaultMessage: 'default message',
  didLogin: '41-didLogin',
  didLogout: '42-didLogout',

  nStars: '421-nStars',
  
  oneStar: '43-oneStar',

  worldMapSlug: 'world-1',
}

export const logg = function (a, b='') {
  if (!env.debug) { return }
  if (1 == arguments.length) {
    console.log(`+++ ${a}`);
  } else {
    console.log(`+++ ${b}:`, a);
  }
}
