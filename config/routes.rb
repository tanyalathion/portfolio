Rails.application.routes.draw do
  get 'contact/index'
  get 'projects/index'
  get 'projects/show'
  get 'about/index'
  get 'home/index'
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
