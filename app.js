/*
* Author: Rohit Kumar
* Website: iamrohit.in
* Version: 0.0.1
* Date: 07-01-2016
* App Name: Google Custom Site Search Engine (www.iamrohit.in)
* Description: Build desktop application using node js and electron
*/

var app = require('app');
var electron = require('electron');
var BW = require('browser-window');


var mainScreen = null;

// Action when all window close
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  mainScreen = new BW({width: 800, height: 600});

  // Load the program from HTML file.
  mainScreen.loadURL('file://' + __dirname + '/gsearch.html');

  // Perform action when window close.
  mainScreen.on('closed', function() {
    mainScreen = null;
  });
});


