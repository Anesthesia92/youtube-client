import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  @Output() goSearch = new EventEmitter<string>();
  @Output() changeFilterComponent = new EventEmitter<boolean>();

  private searchQuery = '';
  private isSearchingText: boolean = false;

  public onSearch() {
    this.isSearchingText = !this.searchQuery;
  }

  public toggleFilterComponent() {
    this.changeFilterComponent.emit(true);
  }

}
