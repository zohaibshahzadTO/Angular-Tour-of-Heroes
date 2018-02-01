import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  exports: [ RouterModule ], // Makes router directives available for use in AppModule components that will need them
  imports: [ RouterModule.forRoot() ]
})
export class AppRoutingModule { }
