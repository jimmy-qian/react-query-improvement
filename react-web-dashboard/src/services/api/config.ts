import * as i from 'types';

import { getApiAuthUrl, getApiUrl } from './getApiUrl';

const apiConfig: i.ApiConfigType = {
  /**
   * API base urls
   * @see generateOptions.js
   */
  apiUrls: {
    default: getApiUrl(),
    auth: getApiAuthUrl(),
  },

  /**
   * Login path of the app
   * Used to redirect for unauthorized calls
   * @see redirectToLogin.js
   */
  loginPath: '/auth/login',

  /**
   * Not found page of the app
   * Used to redirect if the client does not have access rights to the content
   */
  notFoundPath: '/niet-gevonden',

  /**
   * If the app isn't depended on authorization put this to false
   * @see generateOptions.js
   */
  defaultWithAuth: true,

  /**
   * Default API to choose if no option is given
   * @see generateOptions.js
   */
  defaultApi: 'default',

  /**
   * Trigger general error message for api failures
   * @param {string} message - generated error message
   *
   * Enter null to disable general error messages
   * @see errorMessages.js
   */

  // Error Message Function returns null to prevent an overload of Toasts showing up on the user's
  // screen. Instead let the Error Messages come from React Query and provide a toastId to prevent
  // duplicate error messages. Check out src/queries/users/details.ts to see examples
  errorMessageFunction: () => null,
};

export default apiConfig;
