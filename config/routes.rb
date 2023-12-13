Rails.application.routes.draw do
  root 'home#index'
  get '/about', to: 'about#index'
  get '/projects', to: 'projects#index'
  get '/projects/:id', to: 'projects#show', as: 'project'
  get '/contact', to: 'contact#index'
end
