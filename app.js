/**
 * app.js -- Provides a minimal Electron app launching the bundled version of `backbone-es6-localstorage-todos`.
 *
 * Please see the JSPM override for `backbone-es6-localstorage-todos` defined in `package.json` that limits files
 * installed by JSPM to the minimum necessary to launch the bundled app.
 */

var app =            require('electron').app;
var BrowserWindow =  require('electron').BrowserWindow;

app.on('ready', function()
{
   var mainWindow = new BrowserWindow({ width: 800, height: 600 });

   mainWindow.loadURL('file://' + __dirname
    + '/jspm_packages/github/typhonjs-demos/backbone-es6-localstorage-todos@master/index.html');
});