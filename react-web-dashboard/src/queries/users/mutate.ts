import * as i from 'types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'services/api';

/**
 * Update a user
 * Overwrite the detail data and invalidate the list, so the data is fetched properly afterwards
 */
export const upsertUser = ({ userId, values }: i.MutateUser) => {
  const fetch = {
    method: userId ? api.patch : api.post,
    path: userId ? `/dashboard/users/users/${userId}` : '/dashboard/users/users',
  };

  const body = {
    ...values,
    groups: values.groups?.map((group) => String(group.value)) || [],
  };

  return fetch.method<i.User>({
    path: fetch.path,
    body,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(upsertUser, {
    onSuccess: (newUser) => {
      queryClient.setQueryData(['user', newUser.id], newUser);
      queryClient.invalidateQueries(['users']);
    },
  });
};

/**
 * Delete a user
 * */
export const deleteUser = ({ userId }: i.MutateUserDelete) => {
  return api.del<i.User>({
    path: `/dashboard/users/users/${userId}`,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
};

/**
 * Activate a user
 * Update the paginated list with the updated data
 * */
export const activateUser = ({ userId, action }: i.MutateUserActivation) => {
  return api.post<i.User>({
    path: `/dashboard/users/users/${userId}/${action}`,
  });
};

export const useActivateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(activateUser, {
    onSuccess: (newUser) => {
      queryClient.setQueryData(['user', newUser.id], newUser);

      // Update an item in a paginated list by looping over all paginated queries,
      // and replacing the updater item with the new one
      // This is only possible if the detail and list data are equal.
      // If not, we would have to reformat it ourselves.
      // In that case you can just invalidate the list query
      queryClient
        .getQueryCache()
        .findAll(['users'])
        .forEach(({ queryKey }) => {
          const users = queryClient.getQueryData<i.PaginationResponse<i.User>>(queryKey);

          if (users) {
            queryClient.setQueryData(queryKey, {
              ...users,
              result: users.result.map((user) => {
                return newUser.id === user.id ? newUser : user;
              }),
            });
          }
        });
    },
  });
};
