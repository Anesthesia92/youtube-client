import {Component, Input} from '@angular/core';
import { SearchResults } from "../models/search-item.model";
import { ItemService } from "../../services/item.service";
import { SearchItem } from "../models/search-response.model";
import { SortingService } from "../../services/sorting.service";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent {

  public cardsList: SearchResults | undefined;
  public itemCards: SearchItem[] = [];

  @Input() item: any;

  constructor (

  ) {
  }

  ngOnInit(): void {

  }

}
