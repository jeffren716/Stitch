class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end
end
