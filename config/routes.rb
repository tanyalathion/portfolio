Rails.application.routes.draw do
  resources :contacts, only: [:new, :create]
  root 'home#index'
  get '/home', to: 'home#index', as: 'home'
  get '/about', to: 'about#index'
  get '/projects', to: 'projects#index'
  get '/projects/:id', to: 'projects#show', as: 'project'
  get '/contact', to: 'contacts#new'
end
