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

# Displaying the Heroes List

In this section, we expanded on the Tour of Heroes app to display a list of heroes, and allow users to select a hero and display the hero's details. First, we need some heroes to display. Eventually, we'll get them from a remote data server but for now we'll create some mock heroes and pretend they came from the server.

We created a file called <b>mock-heroes.ts</b> in the <b>src/app</b> folder and then define a <b>HEROES</b> constant as an array of ten heroes and export it.

To display the list of heroes at the top of the <b>HeroesComponent</b>, we need to import the HEROES const into the <b>heroes.component.ts</b> and then add a heroes property to the class that exposes these heroes for binding.

Now we open the <b>HeroesComponent</b> template file and add a title called "My Heroes" and create an unordered list and insert an <li> within the <ul> that displays the properties of a hero.

We then implement Angular's repeater directive, <b>ngFor</b> into the <li> element. It essentially repeats the host element for each element in a list.

# Styling the Heroes

Of course we also want to make the heroes list attractive and it should respond visually when users hover over and select a hero from the list. Earlier in this project, we set the basic styles for the entire application (app.component.css), however that stylesheet didn't include styles for the list of heroes.

What we can do is define private styles for a specific component and keep everything a component needs -- the code, the HTML, and the CSS --together in one place.

This approach makes it easier to re-use the component somewhere else and deliver the component's intended appearance even if the global styles are different. We define private styles either inline in the <b>@Component.styles</b> array or as stylesheet file(s) identified in the <b>@Component.styleUrls</b> array. When the CLI generated the HeroesComponent, it created an empty <b>heroes.component.css</b> stylesheet for the <b>HeroesComponent</b> and pointed to it in <b>@Component.stylesUrls</b> like this.

# Adding a Click Event Binding

When the user clicks a hero in the master list, the component should display the selected hero's details at the bottom of the page. In this section, we'll listen for the hero item click event and update the hero detail.

The following is a click event binding we implemented to the <li> element:

<b>ngFor="let hero of heroes" (click)="onSelect(hero)"</b>

This is an example of Angular's event binding syntax.

The parentheses around "click" tell angular to listen for the <li> element's click event. When the user clicks in the <li>, Angular executes the onSelect(hero) expression.

onSelect() is a HeroesComponent method that you're about to write. Angular calls it with the hero object displayed in the clicked <li>, the same hero defined previously in the *ngFor expression*

# Summary

- The Tour of Heroes app displays a list of heroes in a Master/Detail view.

- The user can select a hero and see that hero's details.

- Used *ngFor* to display a list.

- Used *ngIf* to conditionally include or exclude a block of HTML.

- We can toggle a CSS style class with a class binding.


# Master / Detail Components

At the moment, the HeroesComponent displays both the list of heroes and the selected hero's details.

Keeping all features in one component as the application grows will not be maintainable. You'll want to split up large components into smaller sub-components, each focused on a specific task or workflow.

In this section, we'll take the first step in that direction by moving the hero details into a separate, reusable HeroDetailsComponent.

The HeroesComponent will only present the list of heroes. The HeroDetailsComponent will present details of a selected hero.

# Make the HeroDetailComponent

We'll use the Angular CLI to generate a new component named <b>hero-detail</b>.

      <b>ng generate component hero-detail</b>

The command scaffolds the HeroDetailComponent files and declares the component in AppModule.


........


# Show the HeroDetailComponent

The HeroesComponent is still a master/detail view.

It used to display the hero details on its own, before you cut that portion of the template. Now it will delegate to the HeroDetailComponent.

The two components will have a parent/child relationship. The parent HeroesComponent will control the child HeroDetailComponent by sending it a new hero to display whenever the user selects a hero from the list.

You won't change the HeroesComponent class but you will change its template.

# Updating the HeroesComponent template

The HeroDetailComponent selector is 'app-hero-detail'. We'll add an <app-hero-detail> element near the bottom of the HeroesComponent template, where the hero detail view used to be.

Then we'll bind the HeroesComponent.selectedHero to the element's hero property like this.

  <b><app-hero-detail [hero]="selectedHero"></app-hero-detail></b>

[hero]="selectedHero" is an Angular property binding. It's a one way data binding from the <b>selectedHero</b> property of the HeroComponent to the <b>hero</b> property of the target element, which maps to the <b>hero</b> property of the <b>HeroDetailComponent</b>.

Now when the user clicks a hero in the list, the <b>selectedHero</b> changes. When the <b>selectedHero</b> changes, the property binding updates hero and the <b>HeroDetailComponent</b> displays the new hero.

# What's Changed?

As before, whenever a user clicks on a hero name, the hero detail appears below the hero list. Now the HeroDetailComponent is presenting those details instead of the HeroesComponent.

Refactoring the original HeroesComponent into two components yields benefits, both now and in the future:

  - We simplified the HeroesComponent by reducing its responsibilities.

  - We can evolve the HeroDetailComponent into a rich hero editor without touching the parent HeroesComponent.

  - We can evolve the HeroesComponent without touching the hero detail view.

  - We can re-use the HeroDetailComponent in the template of some future component.

# Summary

- We created a separate, reusable HeroDetailComponent.

- We used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.

- We used the @Input decorator to make the hero property available for binding by the external HeroesComponent.


# Services

The Tour of Heroes HeroesComponent is currently getting and displaying fake data.

After the refactoring, HeroesComponent will be lean and focused on supporting the view. It will also be easier to unit-test with a mock service.

# Why Services

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

In this section, we'll create a <b>HeroService</b> that all application classes can use to get heroes. Instead of creating that service with <b>new</b>, we'll rely on Angular dependency injection to inject it into the HeroesComponent constructor.

Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places:

<li>1.) In HeroService which uses the service to send a message.</li>
<li>2.) In MessagesComponent which displays that message.</li>

# @Injectable() Services

The @Injectable() decorator tells Angular that this service might itself have injected dependencies. It doesn't have dependencies now but it will soon. Whether it does or it doesn't, its good practice to keep the decorator.

# Get Hero Data

The HeroService could get hero data from anywhere - a web service, local storage, or a mock data source.

Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.

However, for this project, we'll continue to deliver mock heroes.


# Providing the HeroService

We must provide the HeroService in he dependency injection system before Angular can inject it into the HeroesComponent. There are several ways to provide the HeroService: in the HeroComponent, in the AppComponent, in the AppModule. Each option has its pros and cons.

For this project, we'll choose to provide it in the AppModule.

We'll open the AppModule class, import the HeroService and add it to the @NgModule.providers array.

The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it. Now the HeroService is ready to plug into the HeroesComponent.

# Update HeroesComponent

We'll go back to the HeroesComponent class file and deleted the HEROES import and import the HeroService instead. Moreover, we'll replace the definition of the heroes property with a simple declaration.

# Inject the HeroService

Now we'll add a private heroService parameter of type HeroService to the constructor. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site. 

When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

# Add getHeroes()
