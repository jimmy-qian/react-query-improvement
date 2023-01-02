import * as i from 'types';

export const getPaginationQuery = (page = 1, limit = 25) => {
  const query: i.PaginationQuery = {
    limit,
    offset: (page - 1) * limit,
  };

  return query;
};

export const getRestQueries = (payload: i.SearchPaginationPayload) => {
  const query = {};

  for (const [key, value] of Object.entries(payload)) {
    if (value && key !== 'page' && key !== 'limit') {
      query[key] = value;
    }
  }

  return query;
};
