
json.followedUsers do
  @follows.each do |follow|
    json.set! follow.user_id do
      json.extract! follow, :id, :user_id, :follower_id
    end
  end
end
