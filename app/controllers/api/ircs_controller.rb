class Api::IrcsController < ApplicationController

  def create
    @irc = Irc.new(irc_params)
    if @irc.save
      render :show
    else
      render json: @irc.errors.full_messages, status: 422
    end
  end

  private

  def irc_params
    params.require(:irc).permit(:user_id)
  end
end
