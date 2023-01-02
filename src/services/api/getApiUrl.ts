declare const __PROD__: boolean;
declare const __ACC__: boolean;
declare const __TEST__: boolean;
declare const __DEV__: boolean;

const getApiUrl = () => {
  const defaultUrl = 'https://next-dashboard-test.label-a.nl/api';

  if (__PROD__) {
    return defaultUrl;
  }

  if (__ACC__) {
    return defaultUrl;
  }

  if (__TEST__ || __DEV__) {
    return defaultUrl;
  }

  return defaultUrl;
};

export default getApiUrl;
