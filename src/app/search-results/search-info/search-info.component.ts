import { Component, Input } from '@angular/core';
import { SearchItemComponent } from "../search-item/search-item.component";
import { ItemService } from "../../services/item.service";
import { SearchItem } from "../models/search-response.model";
import { SearchResults } from "../models/search-item.model";

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.scss'],
})

export class SearchInfoComponent {

  public cardsList: SearchResults | undefined;
  public itemCards: SearchItem[] = [];

  @Input() item: any;

  constructor (private searchItemComponent: SearchItemComponent, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.filterItemsList$.subscribe(() => {
      this.cardsList = this.itemService.getAllCards();
    })
  this.cardsList = this.itemService.getAllCards();
    this.itemCards = this.cardsList.items;
    console.log(this.itemCards)
  }

}
