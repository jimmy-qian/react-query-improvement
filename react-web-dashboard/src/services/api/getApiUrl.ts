export const getApiUrl = () => {
  const defaultUrl = 'https://api.next.nl/api';

  if (__PROD__) {
    return defaultUrl;
  }

  if (__ACC__) {
    return 'https://api-acc.next.dev/api';
  }

  if (__TEST__ || __DEV__) {
    return 'https://next-dashboard-test.label-a.nl/api';
  }

  return defaultUrl;
};

export const getApiAuthUrl = () => {
  const defaultUrl = 'https://api.next.nl/auth';

  if (__PROD__) {
    return 'https://api.next.nl/auth';
  }

  if (__ACC__) {
    return 'https://api-acc.next.dev/auth';
  }
  if (__TEST__ || __DEV__) {
    return 'https://next-dashboard-test.label-a.nl/auth';
  }

  return defaultUrl;
};
