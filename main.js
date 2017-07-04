// https://ics.media/entry/7298

// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
const app= electron.app;
const BrowserWindow = electron.BrowserWindow;
  
const path = require('path')
const url = require('url')

const DEBUG = false
const fs = require('fs')
const crypto = require('crypto')

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow();

  mainWindow.setMenu(null)
  
  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'
  }));
  
  // デベロッパーツールの起動
  // if(DEBUG) mainWindow.webContents.openDevTools();

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}


//  初期化が完了した時の処理
app.on('ready', createWindow);
  
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', function () {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', function () {
  /// メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});