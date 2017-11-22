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
      render 'api/directory'
    end
  end

  def destroy

  end

end
