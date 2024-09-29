source "https://rubygems.org"

ruby "3.2.3"

# Edge Rails をバンドルする場合: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.4"

# Rails のオリジナルアセットパイプライン [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Active Record のデータベースとして sqlite3 を使用
gem "sqlite3", "~> 1.4"

# Puma ウェブサーバーを使用 [https://github.com/puma/puma]
gem "puma", ">= 5.0"

# JavaScript をバンドルしてトランスパイル [https://github.com/rails/jsbundling-rails]
gem "jsbundling-rails"

# Hotwire の SPA のようなページアクセラレーター [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire のモデストな JavaScript フレームワーク [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# JSON API を簡単に構築 [https://github.com/rails/jbuilder]
gem "jbuilder"

# 本番環境で Action Cable を実行するために Redis アダプターを使用
# gem "redis", ">= 4.0.1"

# Redis で高レベルなデータ型を得るために Kredis を使用 [https://github.com/rails/kredis]
# gem "kredis"

# Active Model has_secure_password を使用 [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "bcrypt", "~> 3.1.7"

# Windows は zoneinfo ファイルを含まないため、tzinfo-data gem をバンドル
gem "tzinfo-data", platforms: %i[ windows jruby ]

# キャッシュによって起動時間を短縮; config/boot.rb で必須
gem "bootsnap", require: false

# Active Storage のバリアントを使用 [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # デバッグに関する情報を取得するための gem [https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem]
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  # 例外ページでコンソールを使用 [https://github.com/rails/web-console]
  gem "web-console"

  # スピードバッジを追加 [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # 遅いマシンや大きなアプリでコマンドを高速化 [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # システムテストを使用 [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "rails-controller-testing"
  gem "minitest"
  gem "minitest-reporters"
  gem "guard"
  gem "guard-minitest"
end