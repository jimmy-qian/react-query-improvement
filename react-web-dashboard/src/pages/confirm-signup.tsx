import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { Auth } from 'services/Auth';
import apiConfig from 'services/api/config';
import { Loading } from 'common/general';

const ConfirmSignup: i.NextPageComponent = () => {
  const router = useRouter<Queries>();

  const onActivateAccount = () => {
    const { uid, token } = router.query;

    Auth.post({
      path: '/users/activation/',
      body: {
        uid,
        token,
      },
    })
      .then(() => {
        toast.success('Your account is activated. You can reset your password now.');
        router.replace('/reset-password');
      })
      .catch(() => {
        router.replace(apiConfig.loginPath);
      });
  };

  React.useEffect(() => {
    onActivateAccount();
  }, []);

  return <Loading position="absolute" />;
};

type Queries = {
  uid: string;
  token: string;
};

export default ConfirmSignup;
