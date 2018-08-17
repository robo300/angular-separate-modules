import {Component, OnInit} from '@angular/core';
import {Queue} from '../queue/queue';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {WatchedShow} from './models/watchedShowsModel';
import {ShowsService} from './shows.service';
import {Episode} from './models/episode';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit {

  public shows: Array<WatchedShow>;

  constructor(private queue: Queue, private showsService: ShowsService) {
  }

  ngOnInit() {
  }

  public getShows(): Array<WatchedShow> {
    return this.showsService.getShowsFromLastWeek();
  }

  public getEpisodes(): Array<Episode> {
    return this.showsService.getEpisodesFromLastWeek();
  }

  public getLastWatchedShow(): WatchedShow {
    return this.getShows()[0];
  }

  public getShowsCount(): number {
    return this.getShows().length;
  }

  public getEpisodesCount(): number {
    return this.getEpisodes().length;
  }

  public getWeekDetailsInfo(): String {
    return this.getShows().map(show => show.getTitle()).join();
  }
}
