class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    @users = @channel.users
  end
end
