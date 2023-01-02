import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useGetMe } from 'queries/users/detail';
import { Skeleton } from 'common/general';
import { DataField, Row } from 'common/layout';
import { Heading, Text } from 'common/typography';
import { DashboardLayout } from 'modules/layouts';

const Page: i.NextPageComponent = () => {
  const { data: me, isLoading, error: meError } = useGetMe();

  if (meError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong. Please try again later.', { toastId: 'user-not-found' });
  }

  return (
    <DashboardLayout title="My Account">
      <Heading as="h1" margin="0 0 24px">
        Personal information
      </Heading>
      <Row>
        <DataField label="Email">
          {isLoading ? <Skeleton isLoading /> : <Text>{me?.email}</Text>}
        </DataField>
      </Row>
    </DashboardLayout>
  );
};

export default Page;
