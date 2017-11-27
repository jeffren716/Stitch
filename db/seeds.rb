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
  {username: 'BobRoss', password: 'asldkfhapsoid', channel_id: 2, stream_title: 'Happy Little Accidents', stream_url: 'http://player.twitch.tv/?video=187283482&time=03m46s'}
]

channel_array = [
  {name: 'League of Legends', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg'},
  {name: 'Creative', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Creative-285x380.jpg'},
  {name: 'Overwatch', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg'},
  {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-285x380.jpg'},
  {name: 'Hearthstone', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg'},
  {name: 'Dota 2', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg'},
  {name: 'Music', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Music-285x380.jpg'},
  {name: 'Counter-Strike: Global Offensive', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg'},
  {name: 'World of Warcraft', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg'},
  {name: 'Minecraft', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg'},
  {name: 'Path of Exile', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-285x380.jpg'},
  {name: 'Super Mario Odyssey', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Odyssey-285x380.jpg'},
  {name: 'The Legend of Zelda: Breath of the Wild', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-285x380.jpg'},
  {name: 'Smite', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Smite-285x380.jpg'},
  {name: "Tom Clancy's Rainbow Six: Siege", pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-285x380.jpg'},
  {name: 'Rocket League', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg'},
  {name: 'Super Smash Bros. for Wii U', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20for%20Wii%20U-285x380.jpg'},
  {name: 'Super Smash Bros. Melee', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Melee-285x380.jpg'},
  {name: 'The Legend of Zelda: Ocarina of Time', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Ocarina%20of%20Time-285x380.jpg'},
]

channel_array.each do |channel|
  Channel.create!(channel)
end

user_array.each do |user|
  User.create!(user)
end
