import { Component, OnInit } from '@angular/core';
import { SearchResults } from "../models/search-item.model";
import { ItemService } from "../../services/item.service";
import { Observable } from "rxjs";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  public cardsList: SearchResults[] = [];
  public itemCards: any;
  constructor (private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.cardsList= this.itemService.getAllCards();
    this.itemCards = this.cardsList[0].items
    console.log( this.itemCards)
  }

}
