@channels.each do |channel|
  json.set! channel.id do
    json.set! :type, 'channel'
    json.partial! 'api/channels/channel', channel: channel
  end
end

@users.each do |user|
  json.set! user.id do
    json.set! :type, 'user'
    json.partial! 'api/users/user', user: user
  end
end
