import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SortingService {

  public searchParameter: BehaviorSubject<string> = new BehaviorSubject('');
  public sortParameter: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
  }

  public applySearch(parameter: string): void {
    this.searchParameter.next(parameter);
  }

  public applySort (parameter: string): void {
  this.sortParameter.next(parameter);
}


}
