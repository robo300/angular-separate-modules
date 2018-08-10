import { GetWatchedShowsApiCall } from './apiCalls/getWatchedShowsApiCall';
import { View } from '../model/view';
import { Show } from './models/show';
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Queue } from '../queue/queue';
import { IObserver } from '../observable/IObserver';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit, IObserver {
  public looper: any;
  public counter = 0;

  receiveNotification<T>(message: T): void {
    // console.log('client received notification: ' + message);
  }

  constructor(private fetchService: FetchService, private queue: Queue, private view: View) { }

  ngOnInit() {
    this.queue.registerObserver(this);
  }

  onStopButtonClick(e) {
    this.stopLooper();
  }

  onStartButtonClick(e) {
    this.startLooper();
  }

  onAddItemToQueueClick(e) {
    const queueItem = new GetWatchedShowsApiCall(this.fetchService, this.view, this.queue);
    this.queue.push(queueItem);
    this.counter++;
  }

  onPrintItemsClick(e) {
    this.queue.print();
  }

  private startLooper() {
    this.looper = interval(100).subscribe(v => {
      if (this.queue.getSize() > 0) {
        if (!this.queue.isBusy()) {
          this.queue.getFirst().getDataFromApi();
        } else {
          // wait for ready queue
        }
      } else {
        console.log(`empty queue so nothing to fetch, queue size: ${this.queue.getSize()}, queue state busy?: ${this.queue.isBusy()}`);
        this.stopLooper();
      }
    });
  }

  private stopLooper() {
    if (this.looper) {
      this.looper.unsubscribe();
      console.log('looper stopped');
    } else {
      console.log('nothing to unsubscribe');
    }
  }

  public getShows(): Array<Show> {
    return this.view.getShows();
  }
}
