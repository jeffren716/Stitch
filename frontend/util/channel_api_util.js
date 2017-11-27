export const fetchChannels = () => (
  $.ajax({
    url: 'api/channels',
    method: 'GET'
  })
);

export const fetchChannel = (channel) => (
  $.ajax({
    url: `api/channels/${channel.id}`,
    method: 'GET'
  })
);
