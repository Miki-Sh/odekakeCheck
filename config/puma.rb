# この設定ファイルは Puma によって評価されます。ここで呼び出されるトップレベルのメソッドは、
# Puma の設定DSLの一部です。DSLで提供されるメソッドの詳細については https://puma.io/puma/Puma/DSL.html を参照してください。

# Puma は内部のスレッドプールからのスレッドで各リクエストを処理できます。
# `threads` メソッド設定は2つの数値（最小と最大）を取ります。
# スレッドプールを使用するすべてのライブラリは、Pumaで指定された最大値に合わせて構成する必要があります。
# デフォルトは最小と最大で5スレッドに設定されており、これは Active Record のデフォルトスレッドサイズと一致します。
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

# 本番環境ではワーカー数をプロセッサ数と同じに設定します。
if ENV["RAILS_ENV"] == "production"
  require "concurrent-ruby"
  worker_count = Integer(ENV.fetch("WEB_CONCURRENCY") { Concurrent.physical_processor_count })
  workers worker_count if worker_count > 1
end

# Puma が開発環境でワーカーを終了する前に待機する `worker_timeout` のしきい値を指定します。
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

# Puma がリクエストを受信するためにリッスンする `port` を指定します。デフォルトは3000です。
port ENV.fetch("PORT") { 3000 }

# Puma が実行される `environment` を指定します。
environment ENV.fetch("RAILS_ENV") { "development" }

# Puma が使用する `pidfile` を指定します。
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

preload_app!
# `bin/rails restart` コマンドで Puma を再起動できるようにします。
plugin :tmp_restart