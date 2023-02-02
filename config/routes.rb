Rails.application.routes.draw do
  resources :reviews
  resources :kid_dads
  resources :people
  resources :meters
  resources :comments
  resources :moments
  resources :favorites
  resources :pets
  resources :kids
  resources :dads
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '/hello', to: 'application#hello_world'
end
