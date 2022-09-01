import { Component, EventEmitter, Output } from '@angular/core';
import { SortingService } from "../../../youtube/services/sorting.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() public onSort: EventEmitter<string> = new EventEmitter<string>();

  public toggleFilter = false;
  public filter: string = '';

  constructor (private sorting: SortingService) {
  }

  public goSearch(searchQuery: string): void {
    if (searchQuery === '') searchQuery = ' ';
    this.sorting.applySearch(searchQuery)
    console.log(searchQuery)
  }

  public goSort(sortParam: string): void {
    this.sorting.applySort(sortParam);
    console.log(sortParam)
  }

  public filtering() {
    this.onSort.emit(this.filter);
  }
}
