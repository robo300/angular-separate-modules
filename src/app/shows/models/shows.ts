import {WatchedShow} from './watchedShowsModel';

export class Shows {

  private readonly shows: Array<WatchedShow>;

  constructor(shows: Array<WatchedShow>) {
    this.shows = shows;
  }

  getAllShows(): Array<WatchedShow> {
    return this.shows;
  }

  addShow(show: WatchedShow): void {
    this.shows.push(show);
  }
}
