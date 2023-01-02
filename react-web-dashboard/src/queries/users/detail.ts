import * as i from 'types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'hooks';
import api from 'services/api';

import { selectUserForm } from './selectors';

export const getUser = (userId?: string) => {
  return api.get<i.User>({
    path: `/dashboard/users/users/${userId}`,
  });
};

export const useQueryUser = () => {
  const { query } = useRouter<{ userId: string }>();

  return useQuery<i.User, i.ResponseError>(['user', query.userId], () => getUser(query.userId), {
    enabled: Boolean(query.userId),
  });
};

export const useSelectUserForm = () => {
  const { query } = useRouter<{ userId: string }>();
  const queryClient = useQueryClient();

  return useQuery<i.User, i.ResponseError, i.SelectUserForm>(
    ['user', query.userId],
    () => getUser(query.userId),
    {
      enabled: Boolean(query.userId),
      select: (data) => {
        const usersGroups = queryClient.getQueryData<i.UsersGroup[]>(['usersGroups', 1]);
        return selectUserForm(data, usersGroups);
      },
    },
  );
};

export const getMe = () => {
  return api.get({
    type: 'auth',
    path: '/users/me',
  });
};

export const useGetMe = () => {
  return useQuery<i.UserMe>(['me'], getMe);
};
