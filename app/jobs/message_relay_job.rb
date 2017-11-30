class MessageRelayJob < ApplicationJob
  def perform(message, irc)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{irc.id}",
                                 message: JSON.parse(message))
  end
end
