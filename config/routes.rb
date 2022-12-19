Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users, :controllers => { registrations: 'users/registrations' }

  get '/', to: 'static_pages#index'
  get '/userpage', to: 'static_pages#index'
  get '/stats', to: 'static_pages#index'
  get '/projects', to: 'static_pages#index'
  get '/projects/:id', to: 'static_pages#index'
  get '/assignments/:id', to: 'static_pages#index'
  get '/assignments/:id/edit', to: 'static_pages#index'
  get '/projects/:id/edit', to: 'static_pages#index'
  get '/new', to: 'static_pages#index'
  
  get '/redirect', to: 'calendars#redirect', as: 'redirect'
  get '/callback', to: 'calendars#callback', as: 'callback'
  get '/calendars', to: 'calendars#calendars', as: 'calendars'
  get '/events/:calendar_id', to: 'calendars#events', as: 'events', calendar_id: /[^\/]+/
  post '/events/:calendar_id', to: 'calendars#new_event', as: 'new_event', calendar_id: /[^\/]+/

  put '/assignments/:id/api/v1/assignments/:id', to: 'api/v1/assignments#update'
  put '/projects/:id/api/v1/projects/:id', to: 'api/v1/projects#update'
  post '/projects/api/v1/assignments', to: 'api/v1/assignments#create'

  namespace :api do
    namespace :v1 do
      resources :assignments, only: [:show, :create, :edit, :update]
      resources :projects, only: [:index, :show, :create, :edit, :update]
      resources :stats, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

