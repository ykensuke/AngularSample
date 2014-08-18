利用方法
==========================

事前準備
---------------

nodeのインストール
bowerのインストール??
gulp,,,いろいろ
sudo npm install -g  gulp-sass
//sudo gem install compass 



インストール手順
---------------

git clone ◯◯◯◯◯
npm install


開発手順
---------------

gulp server
ブラウザでlocalhost:9000にアクセス


gulpコマンド
---------------

src内のコードをclean & build
gulp

ローカルサーバーの起動
gulp server

--------------------------------------------------------------------



調査事項
============


Angular
--------------------

* JSを必要に応じて読み込む？htmlのヘッドにjsを大量に読み込むことになるので、動的に読み込むなどが必要？
* CSSは分割して読み込むべきか
* IE8対応の書き方(カスタムタグが使えないなど)
* テンプレートの共通パーツ化
* 例えばログイン機能ボックス、関連記事ボックス、などはどうやってmodule管理していく？
* spaで本当に良いのか？？
    - 分ければ簡単にファイル分離できる、初期読み込みを減らせる。ただしページ遷移時に読み込みが増える
* テストツール導入


gulp bower
--------------------

* リリース版と開発版の別々publish??
* gulpを使って必要なjsだけをprojectに含める??



その他
---------------------

* CSSプリプロセッサー
* ビルドツール
* altJS
* JSフレームワーク
* JSパッケージマネージャー


最終目標
============

* htmlをコーダーに分離できるのかを確定する。



