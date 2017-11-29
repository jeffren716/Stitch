json.channel do
  json.set! channel.id do
    json.extract! channel, :id, :name, :pic_url
    json.user_ids channel.users.pluck(:id)
  end
end


json.users do
  users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :stream_title, :stream_url, :profile_picture

    end
  end

end
