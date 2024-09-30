# このファイルは、データベースの現在の状態から自動生成されています。このファイルを編集するのではなく、Active Record のマイグレーション機能を使用してデータベースを段階的に修正し、その後このスキーマ定義を再生成してください。

# このファイルは、bin/rails db:schema:loadを実行するときに Rails がスキーマを定義するためのソースです。新しいデータベースを作成する際、bin/rails db:schema:loadは通常、すべてのマイグレーションを最初から実行するよりも速く、エラーが発生する可能性が低いです。古いマイグレーションは、外部依存関係やアプリケーションコードを使用している場合、正しく適用されない可能性があります。

# このファイルは、バージョン管理システムにチェックインすることを強く推奨します。

ActiveRecord::Schema[7.1].define(version: 2024_09_30_085153) do
  create_table "todos", force: :cascade do |t|
    t.string "task", null: false
    t.boolean "is_completed", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "remember_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
