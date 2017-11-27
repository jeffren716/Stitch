class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.find_by(params[:channel_id])
  end

  def show
    @user = User.find_by(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
