class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render json: ['Invalid username or password'], status: 401
    else
      login!(@user)
      render json: @user
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: ['goodbye']
    else
      render json: ["no current user"], status: 404
    end
  end

end
