#!/bin/bash
set -e

# サーバーピッドファイルを削除（存在する場合）
rm -f /app/tmp/pids/server.pid

# コマンドを実行
exec "$@"