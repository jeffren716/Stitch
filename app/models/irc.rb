class Irc < ApplicationRecord
  validates :user_id, presence: true


  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :messages,
  primary_key: :id,
  foreign_key: :irc_id,
  class_name: :Message

  has_many :chatters,
  through: :messages,
  source: :user
end
