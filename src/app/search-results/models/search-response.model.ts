interface SearchInputSnippetThumbnails {
  url: string;
  width: number;
  height: number;
}

interface SearchItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: SearchInputSnippetThumbnails;
    medium: SearchInputSnippetThumbnails;
    high: SearchInputSnippetThumbnails;
    standard: SearchInputSnippetThumbnails;
    maxres: SearchInputSnippetThumbnails;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface SearchItemStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: SearchItemSnippet;
  statistics: SearchItemStatistics;
}

