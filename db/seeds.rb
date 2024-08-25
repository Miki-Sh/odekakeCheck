# このファイルは、アプリケーションをすべての環境（本番、開発、テスト）で動作させるために必要なレコードの存在を確保するためのものです。
# ここに記述されるコードは冪等性（べきとうせい）を持つべきであり、どの環境でも任意のタイミングで実行できるようにする必要があります。
# このデータは、bin/rails db:seed コマンドでロードされるか、db:setupとともにデータベースに作成されます。
#
# 例:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

json = ActiveSupport::JSON.decode(File.read('db/seeds/todos.json'))
json.each do |record|
  Todo.create!(record)
end