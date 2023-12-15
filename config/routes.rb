Rails.application.routes.draw do
  root 'home#index'
  get '/home', to: 'home#index', as: 'home'
  get '/about', to: 'about#index'
  get '/projects', to: 'projects#index'
  get '/projects/:id', to: 'projects#show', as: 'project'
  get '/contact', to: 'contact#index'
end
