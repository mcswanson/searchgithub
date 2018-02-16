# Searchgithub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Configuration

To configure the application to work with github API, you first need to register a new application with your github account.  To this you will need to go to https://github.com/settings/developers and select "register a new application".

You then add the application name "searchgithub", and the homepage as "http://localhost:4200" or the host of where you want to deploy the application.

You will then get a ClientID and a Client Secret, which is needed when mutliple requests that are made to the application.

Once have the ClientID and Client Secret you you will need to update the following private properties of the github.services.ts by adding your github user hame, client id and client secret key to the following line of code:

private client_id = 'add your client id here to access the github API';
private client_secret = 'add your client secret key here to access the github API';

this.username = 'add your github username here';


