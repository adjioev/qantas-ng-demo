import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './modules/cars/components/car/car.component';
import { SearchComponent } from './modules/cars/components/search/search.component';
import { CaroftheweekComponent } from './modules/cars/components/caroftheweek/caroftheweek.component';

const routes: Routes = [
  {
    path: '', component: CaroftheweekComponent //, children: []
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'make/model/:id', component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
