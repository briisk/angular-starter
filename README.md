# Briisk Angular Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and it meets [Briisk JavaScript Style Guide](https://github.com/briisk/briisk-javascript).
It contains configured ngrx/store with effects, router and devtools, scss for styles, htmllint, sass-lint and tslint which are run before every commit and tests which are run before every push.
It also contains example component with module and store.

## Before run

Run `npm run init` to initialize the app.

## Run application

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `npm start:production` for a dev server in the production mode. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project for development purposes. The build artifacts will be stored in the `dist/` directory.
Run `npm run build:production` to build the project for production purposes. The build artifacts will be stored in the `dist/` directory.
Run `npm run build:staging` to build the project for staging purposes. The build artifacts will be stored in the `dist/` directory.
Run `npm run build:workspace` to build the project for workspace purposes. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:ci` to execute the unit tests in the single run mode.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
