import ReactGA from 'react-ga';
import { GAKey } from '../utils/config';

export function configureAnalytics() {
  if (window) {
    ReactGA.ginitialize(GAKey);
  }
}

export function pageView() {
  if (window) {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview({ page });
  }
}
