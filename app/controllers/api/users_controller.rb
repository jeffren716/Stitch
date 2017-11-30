class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    channel_id = Channel.find_by(name: 'Music').id
    @user.channel_id = channel_id
    if @user.save
      login!(@user)
      render @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
