class Api::ChannelsController < ApplicationController

  def index
    render json: ['hello']
  end
end
