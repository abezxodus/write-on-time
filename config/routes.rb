Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users, :controllers => { registrations: 'users/registrations' }

  get '/', to: 'static_pages#index'
  get '/userpage', to: 'static_pages#index'
  get '/projects', to: 'static_pages#index'
  get '/projects/:id', to: 'static_pages#index'
  get '/assignments/:id', to: 'static_pages#index'
  get '/assignments/:id/edit', to: 'static_pages#index'
  get '/projects/:id/edit', to: 'static_pages#index'
  get '/new', to: 'static_pages#index'
  
  get '/redirect', to: 'homes#redirect', as: 'redirect'
  get '/callback', to: 'homes#callback', as: 'callback'
  get '/calendars', to: 'homes#calendars', as: 'calendars'
  get '/events/:calendar_id', to: 'homes#events', as: 'events', calendar_id: /[^\/]+/
  post '/events/:calendar_id', to: 'homes#new_event', as: 'new_event', calendar_id: /[^\/]+/

  put '/assignments/:id/api/v1/assignments/:id', to: 'api/v1/assignments#update'
  put '/projects/:id/api/v1/projects/:id', to: 'api/v1/projects#update'
  post '/projects/api/v1/assignments', to: 'api/v1/assignments#create'

  namespace :api do
    namespace :v1 do
      resources :assignments, only: [:show, :create, :edit, :update]
      resources :projects, only: [:index, :show, :create, :edit, :update]
    end
  end

  resources :statistics, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

