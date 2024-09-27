# ベースイメージとして Ruby 3.2.3 を使用
FROM ruby:3.2.3

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libsqlite3-dev \
    nodejs \
    npm

# Node.jsのバージョン管理をインストール（Nodeが最新でない場合は以下のコメントを外す）
RUN npm install -g n && n stable && apt-get purge -y nodejs npm

# 作業ディレクトリを設定
WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY Gemfile Gemfile.lock ./

# Bundlerをインストールし、依存関係をインストール
RUN gem install bundler -v 2.3.26 && bundle install

# package.jsonとpackage-lock.jsonをコピーしてJavaScriptパッケージをインストール
COPY package.json package-lock.json ./
RUN npm install

# アプリケーションの全てのファイルをコピー
COPY . .

# エントリーポイントスクリプトを設定
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# サーバーを起動するためのポートを公開
EXPOSE 3000

# 開発環境で使用するためにWebpackerの監視を開始
CMD ["bash", "-c", "npm run watch & bundle exec rails server -b 0.0.0.0"]
