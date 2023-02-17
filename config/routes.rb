Rails.application.routes.draw do
  resources :reviews, only: [:create, :destroy, :update]
  resources :people
  resources :comments, only: [:create, :destroy]
  resources :moments, only: [:create, :destroy, :update]
  resources :favorites, only: [:update]
  resources :pets, only: [:create, :destroy, :update]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  

  post "/signup", to: "person#create"
  get "/me", to: "person#logged_in"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/people/:id/kids", to: "people#create_kid"
end
