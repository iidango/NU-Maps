<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NU Maps</title>
    <!-- BootstrapのCSS読み込み -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <!-- jQuery読み込み -->
    <script src="js/jquery-1.5.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- BootstrapのJS読み込み -->
    <script src="js/bootstrap.min.js"></script>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- default（Safariと同じ） / black（黒） / black-translucent（ステータスバーをコンテンツに含める） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!-- ホーム画面に表示されるアプリ名 -->
    <meta name="apple-mobile-web-app-title" content="NU-Maps" />
    <!-- ホーム画面に表示されるアプリアイコン -->
    <link rel="apple-touch-icon" href="images/img.png" />
    <script type="text/javascript" src="hum_icon.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="manifest" href="manifest.json" />
  </head>

  <header style="background-color: #fff;">
    <nav style="background-color: #fff;">
      <div id="hamburger">
        <div class="icon-animation type-1">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>
      </div>
      <div class="nav_sp">
        <div class="nav_sp_top"><a href="#"></a></div>
        <ul class="clearfix">
          <li><a href="index.html">お知らせ</a></li>
          <li><a href="#">NU-Mapsの使い方</a></li>
          <li><a href="#">言語/Language</a></li>
          <li><a href="login.html">ログイン</a></li>
        </ul>
      </div>
      <div id="wrapper"></div>
      <?php
      echo "こんにちは";
      ?>
      <!--
      <div style="border:1px ridge;border-bottom-left-radius: 30px;　background-color: #fff;">
      <a style="font-family:arial block; font-size: 40px; margin-left: 20px;margin-right:auto;margin-left:auto;"class="navbar-brand" href="index.html">NU Maps</a>
    -->

    <!---
      <div style="margin-left: 30px;">
        <img
          style="width: 40px; height: 40px; margin-top: -25px;"
          src="images/img.png"
          alt="サンプル"
          align="top"
        />
        <a
          style="
            font-family: arial block;
            color: #4b7198;
            font-size: 40px;
            margin: 0 auto;
            margin-right: 50px;
          "
          href="index.html"
          >NU Maps</a
        >
      </div>
    </nav>
  </header>

  <body>
    <div style="margin-left: 20px; margin-right: 20px; margin-top: 20px;">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">メールアドレス</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">パスワード</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">チェック</label>
        </div>
        <div style="margin-top: 45px; text-align: center;">
          <button
            style="width: 160px;"
            type="button"
            class="btn btn-secondary btn-lg"
          >
            検索
          </button>
        </div>
      </form>
    </div>
    <script>
      <!- service workerの登録関係 -->
      <!--
      if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service_worker.js').then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
      });
      }
      <!
    </script>
  </body>
</html>
