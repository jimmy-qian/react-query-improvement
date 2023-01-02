import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import { getPaginationQuery, getRestQueries } from 'services';
import api from 'services/api';

import { usePrefetchUsers } from './prefetch';

export const getUsers = ({ page, limit, ...rest }: i.SearchPaginationPayload) => {
  const query: i.SearchPaginationQuery = {
    ...getPaginationQuery(page, limit),
    ...getRestQueries(rest),
  };

  return api.get<i.PaginationResponse<i.User>>({
    path: '/dashboard/users/users',
    query,
  });
};

export const useQueryUsers = (payload: i.SearchPaginationPayload) => {
  const onPrefetchUsers = usePrefetchUsers();

  if (payload?.page) {
    // Prefetching the previous and next pages when they are available
    onPrefetchUsers(payload.page, 20);
  }

  return useQuery<i.PaginationResponse<i.User>>(
    ['users', payload?.page || 1],
    () => getUsers(payload),
    {
      keepPreviousData: true,
    },
  );
};
