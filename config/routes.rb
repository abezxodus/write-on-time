Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, :controllers => { registrations: 'users/registrations' }

  get '/userpage', to: 'static_pages#index'
  get '/projects', to: 'static_pages#index'
  get '/projects/:id', to: 'static_pages#index'
  get '/assignments/:id', to: 'static_pages#index'
  get '/assignments/:id/edit', to: 'static_pages#index'
  get '/new', to: 'static_pages#index'
  
  get '/redirect', to: 'homes#redirect', as: 'redirect'
  get '/callback', to: 'homes#callback', as: 'callback'
  get '/calendars', to: 'homes#calendars', as: 'calendars'
  get '/events/:calendar_id', to: 'homes#events', as: 'events', calendar_id: /[^\/]+/
  post '/events/:calendar_id', to: 'homes#new_event', as: 'new_event', calendar_id: /[^\/]+/

  put '/assignments/:id/api/v1/assignments/:id', to: 'api/v1/assignments#update'
  
  namespace :api do
    namespace :v1 do
      resources :arts, only: [:index]
      resources :assignments, only: [:show, :create, :edit, :update]
      resources :projects, only: [:index,:show, :create, :edit, :update]
      resources :users, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

