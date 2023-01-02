import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { useSelectUserForm } from 'queries/users/detail';
import { useUpdateUser } from 'queries/users/mutate';
import { useQueryUsersGroups } from 'queries/usersGroups';
import { FormContainer } from 'common/form';
import { CheckmarkIcon } from 'common/icon';
import { EditForm, DetailPage } from 'modules/pages/users';

const formId = 'userManagementDetailEdit';

const Page: i.NextPageComponent = () => {
  const router = useRouter();
  const { data: userForm } = useSelectUserForm();
  const { mutate: upserUser, error: updateError } = useUpdateUser();
  useQueryUsersGroups({
    page: 1,
    limit: 20,
  });

  if (updateError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong updating this user. Please try again later.', {
      toastId: 'user-update-error',
    });
  }

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    if (!userForm?.userId) return;

    upserUser(
      {
        userId: userForm?.userId,
        values: formValues,
      },
      {
        onSuccess: (newUser) => {
          toast.success('User successfully saved');
          router.push(`/dashboard/users/${newUser.id}`);
        },
      },
    );
  };

  return (
    <DetailPage
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues>
        {...{
          onSubmit,
          defaultValues: userForm?.defaultValues,
          id: formId,
        }}
      >
        {() => <EditForm />}
      </FormContainer>
    </DetailPage>
  );
};

export default Page;
