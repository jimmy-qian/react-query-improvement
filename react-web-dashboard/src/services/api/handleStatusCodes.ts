import * as i from 'types';

import config from './config';
import redirectToLogin from './redirectToLogin';

/**
 * Handle api status codes
 * Return true to exit the request
 */
const handleStatusCodes: i.HandleStatusCodes = async (code) => {
  switch (code) {
    case 204:
      return true;
    case 401:
      await redirectToLogin('SessionExpired');
      return true;
    case 403:
      window.location.href = config.notFoundPath;
      return true;
    default:
      return false;
  }
};

export default handleStatusCodes;
