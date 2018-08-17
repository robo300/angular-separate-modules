export class Episode {
  last_watched_at: string;
  number: number;
  plays: number;

  constructor(last_watched_at, number, plays) {
    this.last_watched_at = last_watched_at;
    this.number = number;
    this.plays = plays;
  }
}
