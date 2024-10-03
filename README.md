# おでかけチェック（ログインありVer）

## なぜこのアプリを作ったのか

&emsp;私がデイサービスで働いていた時に出会った、あるおばあさんに向けて作りました。その方は、軽度の認知症がありながらもいろんなサービスを利用しながら一人暮らしをされていました。デイサービスのお迎えに伺った際に、職員が一緒に戸締りや火の元、
内服薬などの確認を一緒にすることになっていました。けれど、送迎の車の中で度々「あら、戸締りちゃんとしたかしら...」と、とても心配そうに話され、その都度、一緒に確認したので大丈夫なことをお伝えしていました。もしもその時、職員の話だけでなく、目に見えて一緒にチェックしたことがわかるものがあったら、その方もより安心できるのではないか。
もし、お一人で外出される時も、自分で確実に戸締りなどができて、外出先で不安になった時も、外出時にやることをきちんとやってきたことを確認できるものがあると、他者の支援なしでもできることが増えるのではないか。そう思ったことが、このアプリを作ったきっかけです。  
&emsp;このアプリによって、様々な障害や病気を抱えた人が「自分の力でできる」という場面を増やす一助になれると、とてもとてもうれしいです。

## アプリURL

[https://odekake-ls.vercel.app/](https://odekake-ls.vercel.app/)

## 目次

- [機能](#機能)
- [開発環境](#開発環境)
- [本番環境](#本番環境)
- [使用技術(フロントエンド)](#フロントエンド使用技術)
- [使用技術(バックエンド)](#バックエンド使用技術)
- [使用技術（その他）](#その他使用技術)

## 機能

- タスク管理
  - 作成 / 表示 / 更新 / 削除
- 全てのチェックを外す
- ユーザー登録
  - 新規登録 / ログイン / ログアウト

## 開発環境

このアプリはシングルページアプリケーション（SPA）として作成され、フロントエンドは**JavaScript / React** をバックエンドは**Ruby on Rails**を用いて開発しています。コンテナ開発環境構築に**Docker**を使用しました。

- [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) (ES2022)
- [React](https://reactjs.org) (18.2.0)
- [Node.js](https://nodejs.org/) (20.17.0)
- [Ruby](https://www.ruby-lang.org) (3.2.3)
- [Ruby on Rails](https://rubyonrails.org) (7.1.3.4)
- [SQLite](https://www.sqlite.org/) (1.7.3)
- [npm](https://www.npmjs.com/) (9.5.0)
- [Docker](https://www.docker.com)

動作確認のブラウザはChrome（Mac）を使用しています。

## 本番環境

- [PostgreSQL](https://www.postgresql.org) (14.9)
- [AWS ECS](https://aws.amazon.com/ecs/)
- [AWS RDS (PostgreSQL)](https://aws.amazon.com/rds/postgresql/)
- [S3 with CloudFront](https://aws.amazon.com/cloudfront/)


## フロントエンド使用技術

- **React** (18.3.1) - フロントエンドのUIライブラリ
- **React DOM** (18.3.1) - ReactコンポーネントのDOMレンダリング
- **esbuild** (0.23.0) - JavaScriptバンドラ
- **@hotwired/stimulus** (3.2.2) - 簡単なJavaScriptフレームワーク
- **@hotwired/turbo-rails** (8.0.5) - Railsのリアクティブ機能
- **axios** (1.7.7) - HTTPリクエストライブラリ
- **js-cookie** (3.0.5) - クッキー管理ライブラリ
- **Webpacker** - JavaScriptモジュールバンドラ

## バックエンド使用技術

- **Ruby** (3.2.3) - 開発言語
- **Ruby on Rails** (7.1.3.4) - Webアプリケーションフレームワーク
- **PostgreSQL** (14.9) - データベース
- **Puma** (6.4.2) - Railsアプリケーションサーバー
- **Turbo Rails** (2.0.6) - Railsのリアクティブ機能
- **Stimulus Rails** (1.3.3) - フロントエンドの簡単なJavaScriptフレームワーク
- **Guard** (2.18.1) - テスト自動化ツール
- **Minitest** (5.25.0) - テストフレームワーク
- **Capybara** (3.40.0) - 統合テスト用ツール
- **bcrypt** (3.1.20) - パスワードハッシュ化ライブラリ

## その他使用技術

- **Docker** - コンテナ管理

