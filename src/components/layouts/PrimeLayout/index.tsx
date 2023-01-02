import * as React from 'react';
import Image from 'next/image';

import Logo from 'vectors/logo.svg';
import { Anchor } from 'common';

import { GithubLink, PrimeContent, PrimeHeader } from './styled';

const userId = '3783ce59-0e59-4a77-aaaf-e824f7c5e8f1';

const PrimeLayout: React.FC<PrimeLayoutProps> = ({ children }) => {
  React.useEffect(() => {
    console.info('Layout Mounted!');
  }, []);

  return (
    <>
      <PrimeHeader>
        <Logo />
      </PrimeHeader>
      <PrimeContent>
        <ul>
          <li>
            <Anchor to={`/csr/${userId}`}>CSR Page</Anchor>
          </li>
          <li>
            <Anchor to={`/ssr/${userId}`}>SSR Page</Anchor>
          </li>
        </ul>
        {children}
      </PrimeContent>
    </>
  );
};

type PrimeLayoutProps = {
  children: React.ReactNode;
};

export default PrimeLayout;
