import * as moment from 'moment';

export class WatchedShow {
  seasons: [{
    number: number;
    episodes: [{
      last_watched_at: string;
      number: number;
      plays: number;
    }];
  }];
  show: {
    title: string;
    ids: {
      tmdb: string;
    };
  };
  last_watched_at: string;
  image: string; // TODO: extract that field to separate class

  constructor(obj: WatchedShow) {
    this.seasons = obj.seasons;
    this.show = obj.show;
    this.last_watched_at = obj.last_watched_at;
  }

  public wasWatchedWithinLastWeek(): boolean {
    const d = new Date(Date.parse(this.last_watched_at));
    const lastWatchedDate = moment(d);
    const yesterday = moment().subtract(7, 'days').startOf('day');
    return lastWatchedDate.isSameOrAfter(yesterday);
  }

  public getTitle(): string {
    return this.show.title;
  }

  public getWatchedHowLongFromNow(): string {
    const last_watched_at = moment(this.last_watched_at);
    return last_watched_at.fromNow();
  }

  public setImage(image: string): void { // TODO: move set and get image functions to separate class
    this.image = image;
  }

  public getImage(): string {
    return this.image;
  }
}
