json.followedUsers do
  @user.followed_users.each do |followed_user|
    json.set! followed_user.id do
      json.extract! followed_user, :id, :username, :stream_title, :profile_picture
    end
  end
end
