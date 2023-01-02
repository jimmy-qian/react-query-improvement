import * as i from 'types';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { useQueryUser } from 'queries/users/detail';
import { formatDate, fullDateWithTime, translateAccountStatus } from 'services';
import Custom404 from 'src/pages/404';
import { Skeleton } from 'common/general';
import { PenIcon } from 'common/icon';
import { DataField, Row } from 'common/layout';
import { Text, Heading } from 'common/typography';
import { DetailPage } from 'modules/pages/users';

const Page: i.NextPageComponent = () => {
  const router = useRouter<{ userId: string }>();
  const { data: user, isLoading, error: userError } = useQueryUser();

  if (userError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong. Please try again later.', { toastId: 'user-not-found' });
  }

  if (userError?.status === 404) {
    return <Custom404 title="User not found" body="This user could not be found." />;
  }

  return (
    <DetailPage
      headerMainAction={{
        label: 'Edit user',
        icon: <PenIcon />,
        type: 'link',
        href: `/dashboard/users/${router.query.userId}/edit`,
      }}
    >
      <Heading as="h2" margin="0 0 24px">
        Personal information
      </Heading>
      <Row>
        <DataField label="First name">
          {isLoading ? <Skeleton isLoading /> : <Text>{user?.first_name}</Text>}
        </DataField>
        <DataField label="Last name">
          {isLoading ? <Skeleton isLoading /> : <Text>{user?.last_name}</Text>}
        </DataField>
      </Row>
      <Row>
        <DataField label="Email address">
          {isLoading ? <Skeleton isLoading /> : <Text>{user?.email}</Text>}
        </DataField>
      </Row>
      <Row margin="40px 0 16px">
        <DataField label="Account created">
          {isLoading ? (
            <Skeleton isLoading />
          ) : (
            <Text>{user?.created && formatDate(user?.created, fullDateWithTime)}</Text>
          )}
        </DataField>
        <DataField label="Account status">
          {isLoading ? (
            <Skeleton isLoading />
          ) : (
            <Text>{translateAccountStatus[user?.account_status as i.UserAccountStatus]}</Text>
          )}
        </DataField>
      </Row>
      <Row>
        <DataField label="Last login">
          {isLoading ? (
            <Skeleton isLoading />
          ) : (
            <Text>
              {user?.last_login ? formatDate(user?.last_login, fullDateWithTime) : 'None'}
            </Text>
          )}
        </DataField>
      </Row>
      <Heading as="h2" margin="40px 0 24px">
        Groups
      </Heading>
      <Row>
        <DataField label="Group name">
          {isLoading ? (
            <Skeleton isLoading />
          ) : (
            <Text>{user?.groups.map((group) => group.name).join(', ')}</Text>
          )}
        </DataField>
      </Row>
    </DetailPage>
  );
};

export default Page;
