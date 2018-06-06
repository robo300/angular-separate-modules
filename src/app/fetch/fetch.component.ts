import { GetWatchedShowsApiCall } from './../pkg/getWatchedShowsApiCall';
import { View } from './../model/view';
import { Show } from './../model/show';
import { ApiItem } from './../model/apiItem';
import { HttpHeaders } from '@angular/common/http';
import { Dog } from './../model/dog';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { Queue } from '../queue/queue';
import { interval } from 'rxjs/observable/interval';
import { IObserver } from '../observable/IObserver';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})

export class FetchComponent implements OnInit, IObserver {
  public looper: any;
  public counter = 0;
  public view: View = new View();

  receiveNotification<T>(message: T): void {
    console.log('client received notification: ' + message);
  }

  constructor(private fetchService: FetchService, public queue: Queue) { }

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

  public getQueue() {
    return this.queue.getQueue();
  }

  private startLooper() {
    this.looper = interval(100).subscribe(v => {
      if (this.queue.getSize() > 0) {
        this.queue.getFirst().getDataFromApi();
      } else {
        console.log('empty queue so nothing to fetch');
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
}
