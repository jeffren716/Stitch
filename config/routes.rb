Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :follows, only: [:create, :index, :destroy]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show]
    resources :searches, only: [:index]
    resources :ircs, only: [:create, :show] do
      resources :messages, only: [:create, :index]

    end
  end
end
