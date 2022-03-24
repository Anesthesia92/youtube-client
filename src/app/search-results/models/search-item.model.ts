import { SearchItem } from "./search-response.model";

export interface SearchResults {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  item: SearchItem[]
}
