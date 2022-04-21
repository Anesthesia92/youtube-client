import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})

export class SearchInputComponent {

  @Output() public goSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public changeFilterComponent = new EventEmitter<boolean>();

  public filter: string = '';
  private searchQuery = '';
  private isSearchingText: boolean = false;

  public onSearch() {
    this.isSearchingText = !this.searchQuery;
    this.goSearch.emit(this.searchQuery);
  }

  public toggleFilterComponent() {
    this.changeFilterComponent.emit(true);
  }

  public filtering() {
    this.goSearch.emit(this.filter);

  }
}
