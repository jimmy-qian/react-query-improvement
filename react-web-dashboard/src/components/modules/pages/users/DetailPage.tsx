import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useModal, useRouter } from 'hooks';
import { useQueryUser } from 'queries/users/detail';
import { useActivateUser, useDeleteUser } from 'queries/users/mutate';
import { translateUserIsActive } from 'services';
import { ConfirmModal } from 'common/general';
import { DashboardLayout } from 'modules/layouts';

export const DetailPage: i.NextPageComponent<Props> = ({
  children,
  headerMainAction,
  headerTabs,
}) => {
  const [isActivateModalOpen, openActivateModal, closeActivateModal] = useModal();
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal();
  const router = useRouter();
  const { data: user, isLoading } = useQueryUser();
  const { mutate: activateUser, error: activateError } = useActivateUser();
  const { mutate: deleteUser, error: deleteError } = useDeleteUser();

  if (deleteError) {
    // React Query error messages should be in the component instead of the query
    // See: https://front-end.labela.wiki/docs/docs/React%20Query/mutations#showing-toast-messages-after-onsuccess
    toast.error('Something went wrong deleting this user. Please try again later', {
      toastId: 'user-delete-error',
    });
  }

  if (activateError) {
    toast.error('Something went wrong activating this user. Please try again later', {
      toastId: 'user-activation-error',
    });
  }

  const onSetUserActive = () => {
    if (!user) return;

    activateUser(
      {
        userId: user.id,
        action: user.is_active ? 'deactivate' : 'activate',
      },
      {
        onSuccess: () => {
          const successMessage = user.is_active
            ? 'User has been deactivated'
            : 'User has been activated';

          toast.success(successMessage);
          closeActivateModal();
        },
      },
    );
  };

  const onDeleteUser = async () => {
    if (!user) return;

    deleteUser(
      {
        userId: user.id,
      },
      {
        onSuccess: () => {
          toast.success('User has successfully been removed');
          closeActivateModal();
          router.push('/dashboard/users');
        },
      },
    );
  };

  return (
    <DashboardLayout
      title={`${user?.first_name || ''} ${user?.last_name || ''}`}
      headerActions={[
        {
          label: user?.is_active ? 'Deactivate user' : 'Activate user',
          type: 'button',
          onClick: () => openActivateModal(),
        },
        {
          label: 'Delete User',
          type: 'button',
          onClick: () => openDeleteModal(),
        },
      ]}
      headerMainAction={headerMainAction}
      isLoading={isLoading}
      statusLabel={translateUserIsActive(user?.is_active)}
      headerTabs={headerTabs}
    >
      {isActivateModalOpen && (
        <ConfirmModal
          title={user?.is_active ? 'Deactivate user' : 'Activate user'}
          text={`Are you sure you want to ${
            user?.is_active ? 'deactivate' : 'activate'
          } this user?`}
          closeModal={closeActivateModal}
          onConfirm={() => onSetUserActive()}
          confirmButtonVariant={user?.is_active ? 'warning' : undefined}
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmModal
          title="Remove User"
          text="Are you sure you want to remove this user? This will permanently delete all their data. This action cannot be reversed."
          closeModal={closeDeleteModal}
          onConfirm={onDeleteUser}
          confirmButtonVariant="warning"
        />
      )}
      {children}
    </DashboardLayout>
  );
};

type Props = {
  children: React.ReactNode;
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
};
