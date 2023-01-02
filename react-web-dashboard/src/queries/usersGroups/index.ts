import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import { getPaginationQuery } from 'services';
import api from 'services/api';

export const getUserGroups = async (payload: i.PaginationPayload) => {
  const { result } = await api.get<i.PaginationResponse<i.UsersGroup>>({
    path: '/dashboard/users/groups',
    query: {
      ...getPaginationQuery(payload.page, payload.limit),
    },
  });

  return result;
};

export const useQueryUsersGroups = (payload: i.PaginationPayload) => {
  return useQuery<i.UsersGroup[]>(['usersGroups', payload?.page || 1], () =>
    getUserGroups(payload),
  );
};
