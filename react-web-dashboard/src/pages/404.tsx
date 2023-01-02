import * as React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { Heading, Text } from 'common/typography';
import { DashboardLayout } from 'modules/layouts';
import { NotFoundPage } from 'modules/pages/404';

const NotFound = ({
  title = 'Page not found',
  body = 'This page could not be found.',
}: NotFoundProps) => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <DashboardLayout title={title}>
        <Heading>404</Heading>
        <Text>
          {body} Click <Link href="/dashboard">here</Link> to return to the Dashboard.
        </Text>
      </DashboardLayout>
    );
  }

  return (
    <NotFoundPage>
      <Heading>{title}</Heading>
      <Text>{body}</Text>
    </NotFoundPage>
  );
};

export default NotFound;

type NotFoundProps = {
  body?: string;
  title?: string;
};
