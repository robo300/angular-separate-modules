import {View} from '../model/view';
import {Component, OnInit} from '@angular/core';
import {Queue} from '../queue/queue';
import {IObserver} from '../observable/IObserver';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {WatchedShow} from './models/watchedShowsModel';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit, IObserver {

  public data: any;

  receiveNotification<T>(message: T): void {
    // console.log('client received notification: ' + message);
  }

  constructor(private queue: Queue, private view: View) {
  }

  ngOnInit() {
    this.queue.registerObserver(this);
  }

  public getShows(): Array<WatchedShow> {
    return this.view.getShowsFromLastWeek();
  }

  public getLastWatchedShow(): WatchedShow {
    return this.view.getShowsFromLastWeek()[0];
  }

  public getEpisodes(): Array<WatchedShow> {
    return this.view.getEpisodesFromLastWeek();
  }
}
