import { Component, OnInit } from '@angular/core';
import { SearchResults } from "../models/search-item.model";
import { ItemService } from "../../services/item.service";
import { SearchItem } from "../models/search-response.model";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {

  public cardsList: SearchResults | undefined;
  public itemCards: SearchItem[] = [];
  constructor (private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.cardsList= this.itemService.getAllCards();
    this.itemCards = this.cardsList.items;
    console.log( this.itemCards)
  }
}
