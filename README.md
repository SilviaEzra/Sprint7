# Sprint7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Installation and Configuration of JSON Server Auth
## Installation of JSON Server Auth

1. Install json-server and json-server-auth as development dependencies:

npm install -D json-server@0.17.4 json-server-auth

2. Create the db.json file in the root of the project to store users with the following content:

{
  "users": []
}

3. Activate the backend with JSON Server Auth:

npx json-server-auth db.json


## Contributions

If you wish to contribute to this project, please open an issue or submit a pull request.


## License

This project is licensed under the MIT License.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


