require "active_support/core_ext/integer/time"

Rails.application.configure do
  # ここで指定された設定は config/application.rb の設定よりも優先されます。

  # リクエスト間でコードはリロードされません。
  config.enable_reloading = false

  # 起動時にコードをイーガーロードします。これにより、Railsやアプリケーションのほとんどがメモリにロードされ、
  # スレッドベースのWebサーバーやコピーオンライトを利用するサーバーのパフォーマンスが向上します。
  # Rake タスクはパフォーマンスのためにこのオプションを自動的に無視します。
  config.eager_load = true

  # エラーレポートを完全に無効にし、キャッシングを有効にします。
  config.consider_all_requests_local = false
  config.action_controller.perform_caching = true

  # マスターキーが ENV["RAILS_MASTER_KEY"]、config/master.key、または環境ごとのキー
  # （例：config/credentials/production.key）で利用可能かを確認します。このキーは資格情報（および他の暗号化ファイル）を
  # 復号化するために使用されます。
  # config.require_master_key = true

  # `public/` からの静的ファイルの提供を無効にし、代わりに NGINX/Apache に任せます。
  # config.public_file_server.enabled = false

  # CSS をプリプロセッサで圧縮します。
  # config.assets.css_compressor = :sass

  # プリコンパイルされたアセットが見つからなかった場合、アセットパイプラインにフォールバックしません。
  config.assets.compile = false

  # アセットサーバーから画像、スタイルシート、JavaScript を提供する場合に有効にします。
  # config.asset_host = "http://assets.example.com"

  # サーバーがファイルを送信するために使用するヘッダーを指定します。
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # Apache 用
  # config.action_dispatch.x_sendfile_header = "X-Accel-Redirect" # NGINX 用

  # アップロードされたファイルをローカルファイルシステムに保存します（オプションは config/storage.yml を参照）。
  config.active_storage.service = :local

  # メインプロセスやドメインの外部に Action Cable をマウントします。
  # config.action_cable.mount_path = nil
  # config.action_cable.url = "wss://example.com/cable"
  # config.action_cable.allowed_request_origins = [ "http://example.com", /http:\/\/example.*/ ]

  # すべてのアプリへのアクセスが SSL 終端プロキシ経由で行われると仮定します。
  # config.force_ssl と一緒に使用すると、Strict-Transport-Security とセキュアクッキーに使用できます。
  # config.assume_ssl = true

  # すべてのアプリへのアクセスを SSL 経由に強制し、Strict-Transport-Security を使用し、セキュアクッキーを使用します。
  config.force_ssl = false

  # デフォルトで STDOUT にログを出力
  config.logger = ActiveSupport::Logger.new(STDOUT)
    .tap  { |logger| logger.formatter = ::Logger::Formatter.new }
    .then { |logger| ActiveSupport::TaggedLogging.new(logger) }

  # すべてのログ行の前に以下のタグを付加します。
  config.log_tags = [:request_id]

  # "info" はシステム操作に関する一般的で有用な情報を含みますが、個人を特定できる情報（PII）の誤った公開を避けるために
  # 過度な情報の記録を避けます。すべてを記録したい場合は、レベルを "debug" に設定してください。
  config.log_level = ENV.fetch("RAILS_LOG_LEVEL", "info")

  # 本番環境で別のキャッシュストアを使用します。
  # config.cache_store = :mem_cache_store

  # Active Job 用の実際のキューイングバックエンドを使用します（環境ごとにキューを分けます）。
  # config.active_job.queue_adapter = :resque
  # config.active_job.queue_name_prefix = "odekake_check_production"

  config.action_mailer.perform_caching = false

  # 無効なメールアドレスを無視し、メール配信エラーを報告しません。
  # 即時配信エラーを報告するには、これを true に設定し、メールサーバーを構成してください。
  # config.action_mailer.raise_delivery_errors = false

  # I18n のフォールバックを有効にします（翻訳が見つからない場合、I18n.default_locale にフォールバックします）。
  config.i18n.fallbacks = true

  # 非推奨事項のログは行いません。
  config.active_support.report_deprecations = false

  # マイグレーション後にスキーマをダンプしません。
  config.active_record.dump_schema_after_migration = false

  # DNS リバインディング保護と他の `Host` ヘッダー攻撃を有効にします。
  # config.hosts = [
  #   "example.com",     # example.com からのリクエストを許可
  #   /.*\.example\.com/ # `www.example.com` のようなサブドメインからのリクエストを許可
  # ]
  # デフォルトのヘルスチェックエンドポイントのために DNS リバインディング保護をスキップします。
  # config.host_authorization = { exclude: ->(request) { request.path == "/up" } }
end