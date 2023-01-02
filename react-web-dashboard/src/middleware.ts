import { withAuth } from 'next-auth/middleware';

import apiConfig from 'services/api/config';

export default withAuth({
  pages: {
    signIn: apiConfig.loginPath,
  },
});

export const config = {
  matcher: ['/dashboard/:path*'],
};
