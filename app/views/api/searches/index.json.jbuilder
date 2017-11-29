json.channelSearchResults do
  @channels.each do |channel|
      json.partial! 'api/channels/channel', channel: channel, users: {}

  end
end


json.userSearchResults do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user

    end
  end

end
