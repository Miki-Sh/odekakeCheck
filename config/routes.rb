Rails.application.routes.draw do
  get 'sessions/new'
  # /up にヘルスチェックのルートを公開し、アプリが例外なく起動している場合は200を返し、それ以外の場合は500を返します。
  # ロードバランサーやアップタイムモニターがアプリの稼働状況を確認するために使用します。
  get "up" => "rails/health#show", as: :rails_health_check

  root "site#index"
  get "/new", to: "site#index"
  get "/:id", to: "site#index"
  get "/:id/edit", to: "site#index"
  get "/signup",  to: "users#new"
  get    "/login",   to: "sessions#new"
  post   "/login",   to: "sessions#create"
  delete "/logout",  to: "sessions#destroy"
  resources :users

  namespace :api do
    resources :todos, only: %i[index show create destroy update]
  end
end