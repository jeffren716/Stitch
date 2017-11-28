# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all


lol = Channel.create!(name: 'League of Legends', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg')
creative = Channel.create!(name: 'Creative', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Creative-285x380.jpg')
ow = Channel.create!(name: 'Overwatch', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg')
pubg = Channel.create!(name: "PLAYERUNKNOWN'S BATTLEGROUNDS", pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-285x380.jpg')
hs = Channel.create!(name: 'Hearthstone', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg')
dota = Channel.create!(name: 'Dota 2', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg')
music = Channel.create!(name: 'Music', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Music-285x380.jpg')
csgo = Channel.create!(name: 'Counter-Strike: Global Offensive', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg')
wow = Channel.create!(name: 'World of Warcraft', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg')
mc = Channel.create!(name: 'Minecraft', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg')
poe = Channel.create!(name: 'Path of Exile', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-285x380.jpg')
smo = Channel.create!(name: 'Super Mario Odyssey', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Odyssey-285x380.jpg')
botw = Channel.create!(name: 'The Legend of Zelda: Breath of the Wild', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-285x380.jpg')
smite = Channel.create!(name: 'Smite', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Smite-285x380.jpg')
rss = Channel.create!(name: "Tom Clancy's Rainbow Six: Siege", pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-285x380.jpg')
rl = Channel.create!(name: 'Rocket League', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg')
ssb4 = Channel.create!(name: 'Super Smash Bros. for Wii U', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20for%20Wii%20U-285x380.jpg')
ssbm = Channel.create!(name: 'Super Smash Bros. Melee', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Melee-285x380.jpg')
oot = Channel.create!(name: 'The Legend of Zelda: Ocarina of Time', pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Ocarina%20of%20Time-285x380.jpg')

demo = User.create!(username: 'guest', password: 'password', channel_id: creative.id, stream_title: 'Good job finding this!', stream_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ')

user_array = [
  {username: 'LoLUnofficial', password: 'qpwirhgpaoskdn', channel_id: lol.id, stream_title: '2017 Worlds Stage', stream_url: 'http://player.twitch.tv/?video=187649386&time=01h09m15s'},
  {username: 'BobRoss', password: 'asldkfhapsoid', channel_id: creative.id, stream_title: 'Happy Little Accidents', stream_url: 'http://player.twitch.tv/?video=187283482&time=03m46s'}
]

User.create!(user_array)
