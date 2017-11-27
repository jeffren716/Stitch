# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all

user_array = [
  {username: 'demo_user', password: 'password'},
  {username: 'twitch', password: 'qpwirhgpaoskdn'},
  {username: 'BobRoss', password: 'asldkfhapsoid'}
]

channel_array = [
  {name: 'League of Legends'},
  {name: 'Art'},
  {name: 'Overwatch'},
  {name: 'PlayerUnknowns Battlegrounds'},
  {name: 'Hearthstone'},
  {name: 'Dota 2'},
  {name: 'Music'},
  {name: 'Counter-Strike: Global Offensive'},
  {name: 'World of Warcraft'},
  {name: 'Minecraft'},
  {name: 'Path of Exile'},
]

user_array.each do |user|
  User.create!(user)
end

channel_array.each do |channel|
  Channel.create!(channel)
end
