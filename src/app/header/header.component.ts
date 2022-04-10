import { Component } from '@angular/core';
import { SortingService } from "../services/sorting.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public toggleFilter = false;

  constructor (private sorting: SortingService) {
  }

  public goSearch(searchQuery: string): void {
    if (searchQuery === '') searchQuery = 'Angular';
    this.sorting.applySearch(searchQuery)
  }

  public onSort(sortParam: string): void {
    this.sorting.applySort(sortParam);
  }

}
