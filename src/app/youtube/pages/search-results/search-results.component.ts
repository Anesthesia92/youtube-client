import { Component } from '@angular/core';
import { SearchItem} from "../../models/search-response.model";
import { ItemService } from "../../services/item.service";
import { SortingService } from "../../services/sorting.service";
import {SearchResults} from "../../models/search-item.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent {

  public cardsList: SearchResults | undefined;
  public items: SearchItem[] = [];
  public sortType: string = '';

  constructor (private itemService: ItemService, private sort: SortingService) {}

  ngOnInit(): void {
    this.sort.searchParameter.subscribe(value => {
      if (value != '') {
        this.items = this.itemService.getAllCards().items.filter(item =>
          item.snippet.title.includes(value));
      }
      return value;
    })
    this.sort.sortParameter.subscribe(value => {
      this.sortType = value;
      console.log(value)
    })
  }
}
