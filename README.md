# electron-backbone-es6-localstorage-todos
Creates a desktop app using [Electron](http://electron.atom.io/) from [backbone-es6-localstorage-todos](https://github.com/typhonjs-demos/backbone-es6-localstorage-todos).

More documentation and tutorial coming soon. The basic installation steps:

- Install Node
- Install Gulp globally "npm install gulp -g" (if necessary)
- Install JSPM / SystemJS globally "npm install jspm -g" (if necessary)
- Check out the source repo.
- Run "npm install" from the local copy directory. (post install script will run `jspm install`)
- If using WebStorm or an IDE which can import Gulp tasks then import them. 
- Gulp task `electron-start` will launch the Desktop version of `backbone-es6-localstorage-todos`. 
- Gulp task `electron-package-<platform>-<arch>` will build a standalone version of the app and place it in the `./build` directory. From the command line run `gulp --tasks` to find the specific platform / architecture task for your machine. On my MBP / OSX the task is: `electron-package-darwin-x64`.

More info coming soon.

--------

For now though a brief walkthrough of what is going on follows:

What this demo is doing is using JSPM to load the `backbone-es6-localstorage-todos` which is a standalone web app version of the canonical TODOs app using [backbone-es6](https://github.com/typhonjs/backbone-es6) & [Backbone.localStorage](https://github.com/typhonjs/Backbone.localStorage). There is a JSPM [override in package.json](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L20-L32) which only loads the necessary files from `backbone-es6-localstorage-todos` from the bundled app + assets. The local file [app.js](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/app.js) is designated as the [main entry point](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L41) in `package.json` which controls launching Electron and the bundled `backbone-es6-localstorage-todos` web app. Please review [electron.json](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/electron.json). For `typhonjs-core-gulptasks` to import Electron tasks a given repo must have a valid `electron.json` file in the root path and also have loaded [`electron-packager` and `electron-prebuilt`](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L35-L36). 

While it is certainly possible to enable Electron support directly in a given repo. The reason `electron-backbone-es6-localstorage-todos` separates itself from the web app version is that `electron-prebuilt` is a large download. This separation also shows the power of JSPM to link a separate repo and provide an alternate deployment mechanism. 

--------

It should be noted that presently only `backbone-es6` apps work with Electron. Support for [backbone-parse-es6](https://github.com/typhonjs-parse/backbone-parse-es6) is coming soon when [JSPM](http://jspm.io/) 0.17.x is released. Presently JSPM doesn't support the Node runtime very well which is the environment Electron apps execute in, but this is changing soon and `backbone-parse-es6` will be updated to transparently support creating desktop apps with Electron. 
