import {Track} from './../music/models/Track';
import {Shows} from '../shows/models/shows';
import {WatchedShow} from '../shows/models/watchedShowsModel';

export class View {
  private shows: Shows = new Shows([]);
  private tracks: Array<Track> = [];

  constructor() {
    console.log('view constructor');
  }

  public getShows(): Array<WatchedShow> {
    return this.shows.getAllShows();
  }

  public setShows(shows: Array<WatchedShow>): void {
    this.shows = new Shows(shows);
  }

  public addShow(show: WatchedShow): void {
    this.shows.addShow(show);
  }

  public getFirstShow(): WatchedShow {
    return this.shows[0];
  }

  public getTracks(): Array<Track> {
    return this.tracks;
  }

  public addTrack(track: Track): void {
    this.tracks.push(track);
  }

  public getShowsFromLastWeek(): Array<WatchedShow> {
    return this.getShows().filter(show => {
      return show.wasWatchedWithinLastWeek();
    });
  }

  public getEpisodesFromLastWeek(): Array<WatchedShow> {
    return this.getShowsFromLastWeek();
  }
}
