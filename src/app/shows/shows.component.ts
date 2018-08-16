import {Component, OnInit} from '@angular/core';
import {Queue} from '../queue/queue';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {WatchedShow} from './models/watchedShowsModel';
import {ShowsService} from './shows.service';

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

  public getLastWatchedShow(): WatchedShow {
    return this.showsService.getShowsFromLastWeek()[0];
  }

  public getEpisodes(): String[] {
    return this.showsService.getEpisodesFromLastWeek();
  }

  public getShowsCount(): number {
    return this.showsService.getShowsFromLastWeek().length;
  }

  public getEpisodesCount(): number {
    return this.showsService.getEpisodesFromLastWeek().length;
  }

  public displayTooltip(): String {
    let displayInfo = '';
    for (const show of this.getShows()) {
      displayInfo += show.getTitle() + '\n';
    }
    return displayInfo;
  }
}
