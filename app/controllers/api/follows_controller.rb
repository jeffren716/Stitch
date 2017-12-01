class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find_by(id: @follow.user_id)
      render json: @user
    end
  end

  def index
    @user = current_user
    @follows = Follow.all
  end

  def destroy
    @follow = Follow.find_by(user_id: params[:id])
    @follow.destroy
    render json: @follow.user_id
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :follower_id)
  end

end
