# electron-backbone-es6-localstorage-todos
Creates a desktop app from [backbone-es6-localstorage-todos](https://github.com/typhonjs-demos/backbone-es6-localstorage-todos) using [Electron](http://electron.atom.io/).

More documentation and tutorial coming soon. The basic installation steps:

- Install Node
- Install Gulp globally "npm install gulp -g" (if necessary)
- Install JSPM / SystemJS globally "npm install jspm -g" (if necessary)
- Check out the source repo.
- Run "npm install" from the local copy directory. (post install script will run `jspm install` automatically)
- If using WebStorm or an IDE which can import Gulp tasks then import them. 
- Gulp task `electron-start` will launch the Desktop version of `backbone-es6-localstorage-todos`. 
- Gulp task `electron-package-<platform>-<arch>` will build a standalone version of the app and place it in the `./build` directory. From the command line run `gulp --tasks` to find the specific platform / architecture task for your machine. On my MBP / OSX the task is: `electron-package-darwin-x64`. For more information on all available Gulp tasks supported please see [typhonjs-core-gulptasks](https://www.npmjs.com/package/typhonjs-core-gulptasks)

More info coming soon.

--------

For now though a brief walkthrough of what is going on follows:

What this demo is doing is using [JSPM](http://jspm.io/) to load `backbone-es6-localstorage-todos` from Github which is a standalone web app version of the canonical TODOs app using [backbone-es6](https://github.com/typhonjs/backbone-es6) & [Backbone.localStorage](https://github.com/typhonjs/Backbone.localStorage). There is a JSPM [override in package.json](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L20-L32) which only loads the necessary files from `backbone-es6-localstorage-todos` from the self executing bundled app + assets. The local file [app.js](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/app.js) is designated as the [main entry point](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L41) in `package.json` which controls launching Electron and the bundled `backbone-es6-localstorage-todos` web app. Please review [electron.json](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/electron.json). For `typhonjs-core-gulptasks` to import Electron tasks a given repo must have a valid `electron.json` file in the root path and also have loaded [`electron-packager` and `electron-prebuilt`](https://github.com/typhonjs-demos/electron-backbone-es6-localstorage-todos/blob/master/package.json#L35-L36). Please review the options available for `electron-packager` which may be used in `electron.json`: https://www.npmjs.com/package/electron-packager#programmatic-api

While it is certainly possible to enable Electron support directly in any given repo. The reason `electron-backbone-es6-localstorage-todos` separates itself from the web app version is that `electron-prebuilt` is a large download. This separation also shows the power of JSPM to link a separate repo and provide an alternate deployment mechanism via Electron. 

--------

Please see [electron-backbone-parse-es6-todos-improved](https://github.com/typhonjs-demos/electron-backbone-parse-es6-todos-improved) for an Electron desktop app version of [backbone-parse-es6-todos-improved](https://github.com/typhonjs-demos/backbone-parse-es6-todos-improved) which uses [backbone-parse-es6](https://github.com/typhonjs-parse/backbone-parse-es6).
