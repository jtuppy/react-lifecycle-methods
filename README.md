# React Lifecycle Lesson and Exercises

Simple app (made with Create React App) used to provide multiple examples and exercises for learning react lifecycle methods and some hooks.

## Getting Started

Clone the repo:
```
git clone https://github.com/jtuppy/react-lifecycle-methods.git
```

Install dependencies:
```
npm install
```

Start up app:
```
npm start

or

npm run start:hooks
```

## Switching between Class Component views and Functional Component views

The app consists of an `App.js` and `/components` folder which contains components made with classes. It also contains a mirror version of the app written with functions instead of classes. This app is found in `AppHooks.js` and `/components-hooks`.

Each app can be started with a different command. `App.js` will be bundled with `npm start` and `AppHooks.js` is started with `npm run start:hooks`. It relies on an env variable `HOOKS_APP` to be truthy in order to bundle `AppHooks.js` instead of `App.js`. You can also just comment/uncomment the appropriate import in `index.js` if you prefer that.