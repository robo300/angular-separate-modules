export interface ShowResponse {
  show: {
    title: string;
    ids: {
      tmdb: string;
    };
  };
  last_watched_at: string;
}
