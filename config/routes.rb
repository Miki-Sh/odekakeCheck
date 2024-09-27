Rails.application.routes.draw do
  # サイトのインデックスページにアクセスするルート
  # get 'site/index'

  # ルーティングDSL（Domain-Specific Language）に従ってアプリケーションのルートを定義します。
  # 詳しくは https://guides.rubyonrails.org/routing.html を参照してください。

  # /up にヘルスチェックのルートを公開し、アプリが例外なく起動している場合は200を返し、それ以外の場合は500を返します。
  # ロードバランサーやアップタイムモニターがアプリの稼働状況を確認するために使用します。
  get "up" => "rails/health#show", as: :rails_health_check

  root to: redirect('/todos')

  get 'todos', to: 'site#index'
  get 'todos/new', to: 'site#index'
  get 'todos/:id', to: 'site#index'
  get 'todos/:id/edit', to: 'site#index'
  get  'todos/signup',  to: "users#new"

  namespace :api do
    resources :todos, only: %i[index show create destroy update]
  end
end