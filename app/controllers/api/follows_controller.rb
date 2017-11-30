class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save

    end
  end

  def index
    @user = current_user
    @follows = Follow.all
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :follower_id)
  end

end
