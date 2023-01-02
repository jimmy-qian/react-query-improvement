import * as i from 'types';

export const selectUserForm = (user: i.User, usersGroups?: i.UsersGroup[]): i.SelectUserForm => {
  return {
    userId: user?.id,
    defaultValues: {
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      email: user?.email || '',
      groups:
        user?.groups?.map((group: i.UsersGroup) => ({
          label: group.name,
          value: group.id,
        })) || [],
    },
    groupOptions:
      usersGroups?.map((group) => ({
        label: group.name,
        value: group.id,
      })) || [],
  };
};
