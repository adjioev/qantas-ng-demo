import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from 'app/modules/cars/cars.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnDestroy {
  @Input() id: number;

  private sub: any;

  car: any; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.service.getModelById(id).subscribe(data => {
        this.car = data;
      });
    });

    if (this.id) {
      this.service.getModelById(+this.id).subscribe(data => {
        this.car = data;
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
