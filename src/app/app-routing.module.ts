import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*{path: '', pathMatch: 'full', redirectTo: ''},*/
  {component: HomeComponent, path: ''},
  {component: UnitsComponent, path: 'units'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
