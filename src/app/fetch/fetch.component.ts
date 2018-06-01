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
  public testNumber = [];
  public counter = 0;
  public dog: Dog;
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
    this.queue.push('https://dog.ceo/api/breeds/image/random');
    this.counter++;
  }

  onPrintItemsClick(e) {
    this.queue.print();
  }

  public getQueue() {
    return this.queue.queue;
  }

  private startLooper() {
    this.looper = interval(2000).subscribe(v => {
      if (this.queue.queue.length > 0) {
        console.log('2 seconds passed');
        const apiToFetchFrom = this.queue.getFirst();
        this.fetchService.getDataFromUrl(apiToFetchFrom).subscribe(dog => {
          console.log(dog);
          this.dog = dog;
          this.counter--;
        });
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
