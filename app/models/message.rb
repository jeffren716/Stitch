class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.channel) }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :irc,
  primary_key: :id,
  foreign_key: :irc_id,
  class_name: :Irc
end
