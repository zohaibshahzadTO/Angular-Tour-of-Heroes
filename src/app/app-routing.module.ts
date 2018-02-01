import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from '/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id'}, component: HeroDetailComponent }
];


@NgModule({
  exports: [ RouterModule ], // Makes router directives available for use in AppModule components that will need them
  imports: [ RouterModule.forRoot() ]
})
export class AppRoutingModule { }
