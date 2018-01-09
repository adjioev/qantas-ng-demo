import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CarComponent } from './components/car/car.component';
import { SearchComponent } from './components/search/search.component';
import { CaroftheweekComponent } from './components/caroftheweek/caroftheweek.component';
import { CarsService } from './cars.service';

// Material 2 library
import {
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [CarComponent, SearchComponent, CaroftheweekComponent],
  exports: [CarComponent, SearchComponent, CaroftheweekComponent],
  providers: [CarsService]
})
export class CarsModule { }
