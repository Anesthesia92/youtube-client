import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  @Input() areResultsVisible!: boolean | string;
  @Output() areResultsVisibleChange = new EventEmitter<boolean>();
  @Output() changeFilterComponent = new EventEmitter<boolean>();

  public goSearch(searchText: string) {
    this.areResultsVisible = !!searchText;
    this.areResultsVisibleChange.emit(this.areResultsVisible);
  }

  public toggleFilterComponent() {
    this.changeFilterComponent.emit(true);
  }

}
