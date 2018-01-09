import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  modelId;

  makes = [];

  models = [];

  constructor(private service: CarsService, private router: Router) { }

  onMakeSelect(id) {
    this.service.getMakeModels(id).subscribe(data => this.models = data);
  }

  onModelSelect(id) {
    this.modelId = id;
  }

  search() {
    if (this.modelId) {
      this.router.navigate([`/make/model/${this.modelId}`]);
    }
  }

  ngOnInit() {
    this.service.getMakes().subscribe(data => this.makes = data);
  }

}
