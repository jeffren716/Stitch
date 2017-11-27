export const fetchUsers = () => (
  $.ajax({
    url: 'api/users',
    method: 'GET'
  })
);

export const fetchUser = (user) => (
  $.ajax({
    url:`api/users/${user.id}`,
    method: 'GET'
  })
);
