class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  # has_many :users,
  # primary_key: :id,
  # foreign_key: :channel_id,
  # class_name: :User,
  # validate: false

end
