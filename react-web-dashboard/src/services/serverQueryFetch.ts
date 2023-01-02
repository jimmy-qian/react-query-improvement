import { dehydrate, QueryClient, QueryKey } from '@tanstack/react-query';

export const serverQueryFetch = async (key: QueryKey, fetchFn: any) => {
  // Create a new QueryClient instance for each page request.
  // This ensures that data is not shared between users and requests.
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(key, fetchFn);

  return {
    dehydrateState: dehydrate(queryClient),
  };
};
