import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useQueryParams, useRouter } from 'hooks';
import { useQueryUsers } from 'queries/users';
import { usePrefetchUser } from 'queries/users/prefetch';
import { PlusIcon } from 'common/icon';
import { PrimeTable } from 'common/table';
import { DashboardLayout } from 'modules/layouts';
import { tableColumns, OverviewFilterBar } from 'modules/pages/users/overview';

const UserManagementOverview: i.NextPageComponent = () => {
  const router = useRouter<{ userId: string }>();
  const { queryParams } = useQueryParams();
  const memoTableColumns = React.useMemo(() => tableColumns(), []);

  const { onPrefetchHover } = usePrefetchUser();
  const {
    data,
    isLoading,
    error: usersError,
  } = useQueryUsers({
    page: Number(queryParams.page || 1),
    limit: 25,
    search: queryParams.search,
  });

  if (usersError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong loading the users list. Try again later', {
      toastId: 'users-overview-fetch-error',
    });
  }

  return (
    <>
      <OverviewFilterBar />
      <PrimeTable<i.User>
        columns={memoTableColumns}
        pagination={data?.pagination}
        data={data?.result || []}
        isLoading={isLoading}
        onRowHover={(row) => onPrefetchHover(row.id)}
        onRowClick={(row) => router.push(`/dashboard/users/${row.id}`)}
      />
    </>
  );
};

UserManagementOverview.layout = (page) => {
  return (
    <DashboardLayout
      headerMainAction={{
        label: 'Add user',
        icon: <PlusIcon />,
        type: 'link',
        href: '/dashboard/users/create',
      }}
      title="Users"
    >
      {page}
    </DashboardLayout>
  );
};

export default UserManagementOverview;
