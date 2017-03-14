import { GAKey } from '../utils/config';

const isServer = () => {
  return !(typeof window != 'undefined' && window.document);
}

let ReactGA;
if (!isServer()) {
  ReactGA = require('react-ga'); // eslint-disable-line global-require
}

export function configureAnalytics() {
  if (!isServer()) {
    ReactGA.initialize(GAKey);
  }
}

export function pageView() {
  if (!isServer()) {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}
