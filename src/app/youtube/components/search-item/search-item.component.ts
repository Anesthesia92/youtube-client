import {Component, Input} from '@angular/core';
import { SearchResults } from "../../models/search-item.model";
import { SearchItem } from "../../models/search-response.model";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent {

  public cardsList: SearchResults | undefined;
  public itemCards: SearchItem[] = [];

  @Input() item: any;
}
