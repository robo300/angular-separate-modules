import {Injectable} from '@angular/core';
import {WatchedShow} from './models/watchedShowsModel';
import {Shows} from './models/shows';
import * as moment from 'moment';
import {Episode} from './models/episode';

@Injectable()
export class ShowsService {

  private shows: Shows = new Shows([]);
  private episodes: Episode[] = [];

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

  public addEpisode(episode: Episode): void {
    this.episodes.push(episode);
  }

  public getAllEpisodes(): Array<Episode> {
    return this.episodes;
  }

  public getEpisodesFromLastWeek(): Array<Episode> {
    return this.episodes.filter(episode => {
      return this.itemWasWatchedWithinLastWeek(episode.last_watched_at);
    });
  }

  // TODO: that method is copy pasted
  private itemWasWatchedWithinLastWeek(dateToCheck): boolean {
    const d = new Date(Date.parse(dateToCheck));
    const lastWatchedDate = moment(d);
    const yesterday = moment().subtract(7, 'days').startOf('day');
    return lastWatchedDate.isSameOrAfter(yesterday);
  }
}
