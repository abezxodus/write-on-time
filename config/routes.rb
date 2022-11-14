Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/redirect', to: 'homes#redirect', as: 'redirect'
  get '/callback', to: 'homes#callback', as: 'callback'
  get '/calendars', to: 'homes#calendars', as: 'calendars'
  get '/events/:calendar_id', to: 'homes#events', as: 'events', calendar_id: /[^\/]+/
  post '/events/:calendar_id', to: 'homes#new_event', as: 'new_event', calendar_id: /[^\/]+/

  namespace :api do
    namespace :v1 do
      resources :art, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
