import { environment as env } from '../environments/environment';

export const C = {
  didLogin: '41-didLogin',
}

export const logg = (a, b='') => {
  if (env.debug) {
    console.log(`+++ ${b}:`, a);
  }
}