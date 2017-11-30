class IRCChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:irc_id]}"
  end
end
