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

Created a function to retrieve the heroes from the service in HeroesComponent class file.

# Call it in ngOnInit

While we could call getHeroes() in the constructor, thats not the best practice. Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldnt do anything. It certainly shouldnt call a function that makes HTTP requests to a remote server as a real data service would.

Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after construction a HeroesComponent instance.

# Observable data

The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously. The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously.

The HeroService must wait for the server to respond, getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.

HeroService.getHeroes() must have an asynchronous signature of some kind.

It can take a callback. It could return a Promise. It could return an Observable.

In this tutorial, HeroService.getHeroes() will return an Observable in part because it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.

# Observable HeroService

Observable is one of the key classes in the RxJS library.

Later on, we're going to learn that Angular's HttpClient methods return RxJS Observable's. In this project, we'll simulate getting data from the server with the RxJS of() function.

# Subscribe in HeroesComponent

The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.

You'll have to adjust to that difference in HeroesComponent in the getHeroes() method.

Observable.subscribe() is the critical difference.

The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.

That won't work when the HeroService is actually making requests of a remote server.

The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property.

This asynchronous approach will work when the HeroService requests heroes from the server.

# Showing Messages

In this section we will:

- add a MessagesComponent that displays app messages at the bottom of the screen.

- create an injectable, app-wide MessageService for sending messages to be displayed

- inject MessageService into the HeroService

- display a message when HeroService fetches heroes successfully.

# Create MessagesComponent

After creating a new component called "MessagesComponent" and its declared in the AppModule, we'll modify the AppComponent template to display the generated MessagesComponent.

# Creating the MessageService

Use the CLI to create the MessageService in src/app. The --module=app option tells the CLI to provide this service in the AppModule.

  "ng generate service message --module=app"

The service exposes its cache of messages and two methods: one to add() a message to the cache and another to clear() the cache.

# Inject it into the HeroService

Re-open the HeroService ands import the MessageService.

Modify the constructor with a parameter that declares a private messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.

# Send a message from HeroService

Modify the getHeroes method to send a message when the heroes are fetched.

# Display the message from HeroService

The MessagesComponent should display all messages, including the message sent by the HeroService when it fetches heroes.

Open MessagesComponent and import the MessageService.

Modify the constructor with a parameter that declares a public messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.

The messageService property must be public because you're about to bind to it in the template.

Note: Angular only binds to public component properties.


# Binding to the MessageService

We'll replace the CLI-generated MessagesComponent template with the following:

<div ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button class="clear"
          (click)="messageService.clear()">clear</button>
  <div ngFor='let message of messageService.messages'> {{message}} </div>

</div>

This template binds directly to the component's messageService.

- The ngIf only displays the messages area if there are messages to show.

- An ngFor presents the list of messages in repeated <div> elements.

- An Angular event binding binds the button's click event to MessageService.clear().

The messages will look better when you add the private CSS styles to messages.component.css as listed in one of the "final code review" tabs below.

The browser refreshes and the page displays the list of heroes. Scroll to the bottom to see the message from the HeroService in the message area. Click the "clear" button and the message area disappears.

# Summary

- We refactored data access to the HeroService class.

- We provided the HeroService in the root AppModule so that it can be injected anywhere.

- We used Angular Dependency Injection to inject it into a component.

- We gave the HeroService get data method an asynchronous signature.

- We discovered Observable and the RxJS Observable library.

- We used RxJS of() to return an Observable of mock heroes (Observable<Hero[]>).

- The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.

- We created a MessageService for loosely-coupled communication between classes.

- The HeroService injected into a component is created with another injected service, MessageService.
