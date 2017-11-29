class Api::SearchesController < ApplicationController

  def index
    @channels = Channel.top_five_results(search_params[:query])
    @users = User.top_five_results(search_params[:query])
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
