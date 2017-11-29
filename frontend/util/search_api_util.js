export const searchDatabase = (query) => (
  $.ajax({
    url: 'api/searches',
    method: 'GET',
    data: { search: {query} }
  })
);
