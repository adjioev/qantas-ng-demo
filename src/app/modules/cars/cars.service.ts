import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class CarsService {

  sources = {
    modelsFile: '/models.json',
    makesFile: 'makes.json',
    carOfTheWeekFile: 'carOfTheWeek.json'
  }

  constructor(private http: Http) { }

  /**
   * Util function to load json files
   *
   * @param file
   */
  private fetch(file: string): Observable<any> {
    return this.http.get(`assets/${file}`).map((res: any) => res.json());
  }


  getCarOfTheWeek() {
    return this.fetch(this.sources.carOfTheWeekFile);
  }

  /**
   * Returns all car makes from the server
   */
  getMakes() {
    return this.fetch(this.sources.makesFile);
  }

  /**
   * Returns full model list from the server
   */
  getModels() {
    return this.fetch(this.sources.modelsFile);
  }

  /**
   * Returns list of models for a given model id.
   *
   * @param id - model id
   */
  getMakeModels(id: number) {
    return this.getModels().map(data => {
      return data.filter(car => car.makeId === id);
    })
  }

  /**
   * Returns data for a given car id
   *
   * @param id
   */
  getModelById(id: number): any {
    return this.getModels().map(data => {
      return data.find(car => car.id === id);
    })
  }

}
