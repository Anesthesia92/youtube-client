import { Component, EventEmitter, Output } from '@angular/core';
import { SortingTypes } from "../../../shared/models/sorting-types.enum";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() public onSort: EventEmitter<string> = new EventEmitter<string>();

  private isSortingByDate: boolean = false;
  private isSortingByViews: boolean = false;
  public filter: string = '';

  public sortingByDate(): void {
    this.isSortingByDate = !this.isSortingByDate;
    this.onSort.emit(
      this.isSortingByDate ? SortingTypes.newDate : SortingTypes.oldDate
    );
  }

  public sortingByViews(): void {
    this.isSortingByViews = !this.isSortingByViews;
    this.onSort.emit(
      this.isSortingByViews ? SortingTypes.maxView : SortingTypes.minView
    );
  }

  public filtering() {
    this.onSort.emit(this.filter);
  }
}
