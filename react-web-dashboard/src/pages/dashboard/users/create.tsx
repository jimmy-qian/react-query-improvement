import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { useUpdateUser } from 'queries/users/mutate';
import api from 'services/api';
import { FormContainer } from 'common/form';
import { CheckmarkIcon } from 'common/icon';
import { DashboardLayout } from 'modules/layouts';
import { EditForm } from 'modules/pages/users';

const Page: i.NextPageComponent = () => {
  const formId = 'userManagementCreate';
  const router = useRouter();
  const { mutate: upsertUser, error: updateError } = useUpdateUser();

  if (updateError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong updating this user. Please try again later.', {
      toastId: 'user-update-error',
    });
  }

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    upsertUser(
      {
        values: formValues,
      },
      {
        onSuccess: async (newUser) => {
          await api.post({ path: `/dashboard/users/users/${newUser.id}/send_activation_email` });

          toast.success('User successfully created');
          router.push('/dashboard/users');
        },
      },
    );
  };

  return (
    <DashboardLayout
      title="Add user"
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues> onSubmit={onSubmit} id={formId}>
        {() => <EditForm />}
      </FormContainer>
    </DashboardLayout>
  );
};

export default Page;
