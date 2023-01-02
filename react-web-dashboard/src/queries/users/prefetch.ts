import * as React from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useDebounceHover } from 'hooks';

import { getUsers } from './';
import { getUser } from './detail';

/**
 * Build in debounced version of prefetching, so we can choose if we want to prefetch
 * on hover, or just on click or programmatically.
 */
export const usePrefetchUser = () => {
  const queryClient = useQueryClient();

  const onPrefetchUser = (userId: string) => {
    queryClient.prefetchQuery(['user', userId], () => getUser(userId));
  };

  const onHover = useDebounceHover<string>((userId) => onPrefetchUser(userId));

  return {
    onPrefetch: onPrefetchUser,
    onPrefetchHover: onHover,
  };
};

export const usePrefetchUsers = () => {
  const queryClient = useQueryClient();

  const onPrefetchUsers = async (page: number, limit: number) => {
    queryClient.prefetchQuery(['users', page], () => getUsers({ limit, page }));

    if (page > 1) {
      const previousPage = page - 1;
      queryClient.prefetchQuery(['users', previousPage], () =>
        getUsers({ limit, page: previousPage }),
      );
    }

    const nextPage = page + 1;
    queryClient.prefetchQuery(['users', nextPage], () => getUsers({ limit, page: nextPage }));
  };

  React.useEffect(() => {
    onPrefetchUsers(1, 20);
  }, []);

  return onPrefetchUsers;
};
