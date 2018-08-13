import {View} from '../model/view';
import {Show} from './models/show';
import {Component, OnInit} from '@angular/core';
import {Queue} from '../queue/queue';
import {IObserver} from '../observable/IObserver';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit, IObserver {

  receiveNotification<T>(message: T): void {
    // console.log('client received notification: ' + message);
  }

  constructor(private queue: Queue, private view: View) {
  }

  ngOnInit() {
    this.queue.registerObserver(this);
  }

  public getShows(): Array<Show> {
    return this.view.getShows();
  }

  public getLastWatchedShow(): Show {
    return this.view.getShows()[0];
  }
}
