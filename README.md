# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Angular Tutorial Walkthrough

After entering the commands on the command prompt and launching the http://localhost:4200/, we see a page which is called the application shell. The shell is controlled by an Angular component called "AppComponent". Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

The implementation of the shell "AppComponent" is distributed over three files:

<b>- app.component.ts</b> (component class code, written in Typescript)
<b>- app.component.html</b> (component template written in HTML)
<b>- app.component.css</b> (components private CSS styles)


# Heroes Component of the App

Viewing the HeroesComponent (heroes.component.ts file), it seems that we can import the "Component" symbol from the Angular core library and annotate the component class with @component.

@Component is a decorator function that specifies the Angular metadata for the component.

The CLI generated three metadata properties:

<b>1.) selector - the components CSS element selector.</b>
<b>2.) templateUrl - the location of the components template file.</b>
<b>3.) styleUrls - the location of the components private CSS styles.</b>

The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.

The ngOnInit is a <b>lifecycle hook</b>. Angular calls <b>ngOnInit</b> shortly after creating a component. Its a good place to put initialization logic.

We should always <b>export</b> the component class so we can <b>import</b> it elsewhere...like in the <b>AppModule</b>.

# Two-Way Data Binding

Users should be able to edit the hero name in an <input> textbox.

The textbox should both display the hero's <b>name</b> property and update that property as the user types. That means data flow from the component class out to the screen and from the screen back to the class.

To automate that data flow, setup a two-way data binding between the <input> form element and the <b>hero.name</b> property.

We do this by using [{ngModel}] which is Angular's two-way binding syntax. However, it seems that when we added that to the <b>heroes.component.html</b> file, the browser stopped working. The error displayed the following:

"Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'."

Although ngModel is a valid Angular directive, it isnt available by default. It belongs to the optional <b>FormsModule</b> and we must opt-in to using it.

# AppModule

Angular needs to know how the pieces of this application fit together and what other files and libraries the app requires. This information is called metadata.

Some of the metadata is in the @Component decorators we added to our component classes that we mentioned earlier. Other critical metadata is in @ngModule decorators. The most important @ngModule decorator annotates the top-level AppModule class. The Angular CLI generated an AppModule class in <b>src/app/app.module.ts</b>. This is where we opt-in to the <b>FormsModule</b>.

# Summary So Far

- You used the CLI to create a second HeroesComponent.
- You displayed the HeroesComponent by adding it to the AppComponent shell.
- You applied the UppercasePipe to format the name.
- You used two-way data binding with the ngModel directive.
- You learned about the AppModule.
- You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.
- You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.
