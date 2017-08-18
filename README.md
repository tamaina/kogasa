# KOGASA

[![Greenkeeper badge](https://badges.greenkeeper.io/tamaina/kogasa.svg)](https://greenkeeper.io/)

こがさ: electronで超モダンなwaifu2xをあなたに

----

Windows64bit専用品

Windows10推奨

保証はあんましません

----

## 機能

- 基本的な選択
  * 設定項目にないオプションは直接記入します。("--tta 1"など)
- 完成後のサイズ指定にあわせて拡大
- 処理前に一定の割合で縮小
  * ノイズ除去より効果を発揮する場合があります。
- 動画・ファイル分割&コマ処理
  * 長い動画の場合、多くのハードディスク容量が必要になる可能性があります。
- 複数枚画像同時実行
  * 自分のパソコンのスペックに自信がある方のみ1より大きい値を指定してください。

----

## 速さ

cuiで直接指定するよりかなり遅いと思います。

----

## 導入・使用

1. [ImageMagick](http://www.imagemagick.org/script/download.php#windows) をインストールします。
2. [nodejs](https://nodejs.org/) をインストールします。
3. このリポジトリをダウンロードします。わからない人は、[リリースページ](https://github.com/tamaina/kogasa/releases)の`Source Code (zip)`をダウンロードします。
4. アンチウイルスソフトを利用している場合、w2xbin内の.exe実行ファイルが誤検知されないように、対策をしてください。
5. `install.bat`を実行します。
6. `start.bat`を実行します。
  * バッチファイルを実行するときは、内容をしっかり確認して実行します。
7. 出てきた画面に何か画像や動画をドラッグ・アンド・ドロップします。
8. 下部の実行を押して、しばらくして「waifued_(処理概要)(元画像名).(指定形式)」が出力されたら完璧です。

----

waifu2xバージョン情報
- caffe
  - ver 1.1.8.3
  - GPUがない場合、オプションに-p cpuを指定しないと動きません。
- converter-cpp
  - v4.0 Released by DeadSix27

◎settings.jsonの変更により、その他バイナリに対応(CUIでオプションがこれらに準拠されているもの)

win10-64bit専用ですが、waifu2xのバイナリを入れ替えるのと、一部のコードを入れ替えれば、直ぐ他OS対応はできると思います。