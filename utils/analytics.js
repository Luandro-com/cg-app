import ReactGA from 'react-ga';
import { GAKey } from '../utils/config';

const isServer = () => {
   return ! (typeof window != 'undefined' && window.document);
}

export function pageView() {
  if (!isServer()) {
    const page = window.location.pathname;
    ReactGA.initialize(GAKey);
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}
