# Angular 17 SSG (Prerendering) Example

Prerendering, commonly referred to as Static Site Generation (SSG), represents the method by which pages are rendered to static HTML files during the build process.

Prerendering maintains the same performance benefits of server-side rendering (SSR). But achieves a reduced Time to First Byte (TTFB), ultimately enhancing user experience. The key distinction lies in its approach that pages are served as static content, and there is no request-based rendering.

When the data necessary for server-side rendering remains consistent across all users, the strategy of prerendering emerges as a valuable alternative. Rather than dynamically rendering pages for each user request, prerendering takes a proactive approach by rendering them in advance.

Learn more: https://angular.io/guide/prerendering#:~:text=Prerendering%2C%20commonly%20referred%20to%20as,%2Dside%20rendering%20(SSR).

Requirements
 - Node V.20
 - Angular CLI 17

  1. Create app
     - <code>ng new ${projectName} --ssr </code>
<hr>


   2 - Enable SSG
   
   ![image](https://github.com/kcaayush2158/Angular-SSG/assets/28734661/9a60254e-17ce-4da6-9727-ba0840b7082a)
   

  3 - Build with Vite + Esbuild
   
   ![image](https://github.com/kcaayush2158/Angular-SSG/assets/28734661/a24dc06e-06f8-4c55-8393-eed5e8470a87)



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
