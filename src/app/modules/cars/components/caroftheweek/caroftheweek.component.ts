import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-caroftheweek',
  templateUrl: './caroftheweek.component.html',
  styleUrls: ['./caroftheweek.component.css']
})
export class CaroftheweekComponent implements OnInit {

  carOfTheWeek;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getCarOfTheWeek().subscribe(data => {
      this.carOfTheWeek = data;
    });
  }

}
