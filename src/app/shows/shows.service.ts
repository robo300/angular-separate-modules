import {Injectable} from '@angular/core';
import {WatchedShow} from './models/watchedShowsModel';
import {Shows} from './models/shows';
import * as moment from 'moment';

@Injectable()
export class ShowsService {

  private shows: Shows = new Shows([]);

  constructor() {
  }

  public getShowsFromLastWeek(): Array<WatchedShow> {
    return this.getShows().filter(show => {
      return show.wasWatchedWithinLastWeek();
    });
  }

  public getShows(): Array<WatchedShow> {
    return this.shows.getAllShows();
  }

  public addShow(show: WatchedShow): void {
    this.shows.addShow(show);
  }

  public getEpisodesFromLastWeek(): Array<String> {
    const episodes = [];
    for (const show of this.getShows()) {
      for (const season of show.seasons) {
        for (const episode of season.episodes) {
          if (this.episodeWasWatchedWithinLastWeek(episode)) {
            episodes.push(episode);
          }
        }
      }
    }
    return episodes;
  }

  // TODO: that method is copy pasted
  private episodeWasWatchedWithinLastWeek(episode): boolean {
    const d = new Date(Date.parse(episode.last_watched_at));
    const lastWatchedDate = moment(d);
    const yesterday = moment().subtract(7, 'days').startOf('day');
    return lastWatchedDate.isSameOrAfter(yesterday);
  }
}
