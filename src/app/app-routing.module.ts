import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [ RouterModule ], // Makes router directives available for use in AppModule components that will need them
})
export class AppRoutingModule { }
