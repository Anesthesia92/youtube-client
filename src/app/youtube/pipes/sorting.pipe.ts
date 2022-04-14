import { Pipe, PipeTransform } from '@angular/core';
import SortingTypes from "../../shared/models/sorting-types.enum";
import {SearchItem} from "../components/search-results/models/search-response.model";

@Pipe({
  name: 'sorting'
})

export class SortingPipe implements PipeTransform {

  public currentFilter: string = '';

  public transform(value: SearchItem[], args: string): SearchItem[] {
    if (args in SortingTypes && this.currentFilter != '') {
      value = this.filter(value, this.currentFilter);
    }
    switch (args || null) {
      case SortingTypes.minView:
        return this.minViewSorting(value);
      case SortingTypes.newDate:
        return this.newDateSorting(value);
      case SortingTypes.oldDate:
        return this.oldDateSorting(value);
      case SortingTypes.maxView:
        return this.maxViewSorting(value);
      default:
        this.currentFilter = args;
        return this.filter(value, args);
    }
  }
  public maxViewSorting(value: SearchItem[]): SearchItem[] {
    return [...value].sort(
      (a: SearchItem, b: SearchItem): number =>
        parseInt(a.statistics.viewCount, 10) -
        parseInt(b.statistics.viewCount, 10)
    )
  }

  public minViewSorting(value: SearchItem[]): SearchItem[] {
    return [...value].sort(
      (a: SearchItem, b: SearchItem): number =>
        parseInt(a.statistics.viewCount, 10) -
        parseInt(b.statistics.viewCount, 10)
      );
  }

  public newDateSorting(value: SearchItem[]): SearchItem[] {
    return [...value].sort(
      (a: SearchItem, b: SearchItem): number =>
      new Date(b.snippet.publishedAt).valueOf() -
        new Date(a.snippet.publishedAt).valueOf()
    );
  }

  public oldDateSorting(value: SearchItem[]): SearchItem[] {
    return [...value].sort(
      (a: SearchItem, b: SearchItem): number =>
        new Date(b.snippet.publishedAt).valueOf() -
        new Date(a.snippet.publishedAt).valueOf()
    );
  }

  private filter(value: SearchItem[], args: string): SearchItem[] {
    return [...value].filter((obj: SearchItem): boolean =>
      obj.snippet.title.toLowerCase().includes(args.toLowerCase())
    );
  }

}
