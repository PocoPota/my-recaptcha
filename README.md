# My reCAPTCHA
reCAPTCHAを自分なりにカスタマイズできます。
## reCAPTCHAとは
![](https://pocopota.github.io/my-recaptcha/readme-img/recaptcha-checkbox.png)<br>
Googleが提供しているサービスでbotなどの悪質なアクセスからウェブサイトを守るものです。<br>
フォームに登録する際に出てくる「私はロボットではありません」というチェックボックスがそれです。
## My reCAPTCHAとは
![](https://pocopota.github.io/my-recaptcha/readme-img/recaptcha-select.png)<br>
reCAPTCHAをすると稀に画像がいくつか表示され正しいものを選択しなければいけない場合があります。
My reCAPTCHAではその画像を自分で選択でき、実際にサイト上で動かすことができます。
※セキュリティ用ではないのでご注意ください。
## デモページ
https://pocopota.github.io/my-recaptcha/recaptcha.html<br>
正解の画像は一段目の一番左、二段目の真ん中、三段目の真ん中です。
# My reCAPTCHA導入方法
## ファイルの読み込み
CSSとJavaScriptのファイルを読み込みます。<br>
CSSはcssファイル内のrecaptcha.cssまたはrecaptcha.min.cssを読み込みます。<br>
JavaScriptはscriptファイル内のrecaptch.jsまたはrecaptch.min.jsを読み込みます。<br>
ファイルはダウンロードしてもいいですし、Gistからリンクしても大丈夫です。
またjQueryを使用しているのでjQueryのファイルを読み込んでください。
そしてチェックのアイコン画像の表示にRemix iconを使用しているのでそのCSSファイルも読み込んでください。
```
<link href="https://pocopota.github.io/my-recaptcha/css/recaptcha.min.css" rel="stylesheet"> <!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"> <!-- Remix icon -->
<script src="https://pocopota.github.io/my-recaptcha/script/recaptcha.min.js" type="text/javascript"></script> <!-- JavaScript -->
<!-- jQueryの読み込みも忘れないように -->
```
## HTMLコードの編集
recaptch.htmlのdiv id=recaptcha-rcを導入したサイトにコピペします。<br>
以下の項目をお好きなようにカスタマイズしてください。
()内は行数を表しています。
|変更部分|変更内容|変更方法/値|
|:---|:---|:---|
|id=logo-rc(21) 内のimg|チェックボックス右側のロゴの変更|secのリンクを変更|
|id=name-rc(23)|チェックボックス右側のロゴ下に表示される文字列|div内の文字を変更|
|id=title-rc(27) 内のspan|選択する画像の種類の表示|span内の文字を変更|
|id=images-rc(30) 内のimg|選択肢として表示する画像（9枚分）|srcのリンクを変更|
|class=check-rc(31~47) のvalue|画像の正解、不正解の判別|valueが0なら不正解、valueが1なら正解|
# 導入にあたっての注意事項
* My reCAPTCHAはセキュリティを目的としたものではありません。
* id名は導入するサイト内のものとできるだけ被らないように-rcという文字列が含まれています。
* My reCAPTCHAは基本的にidで指定されているので同じページ内で2つ以上は導入できません。気が向いたら複数設置できるようにするかも

My reCAPTCHAで不明な点がありましたらTwitter:@PocoPota_io か mail:pocopota.program@gmail.comにお願いします。
