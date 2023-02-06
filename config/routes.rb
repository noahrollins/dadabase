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
  
  post '/login', to: 'sessions#create'
end
