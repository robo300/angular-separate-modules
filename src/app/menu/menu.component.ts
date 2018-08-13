import { Component, OnInit } from '@angular/core';
import {interval} from '../../../node_modules/rxjs/observable/interval';
import {GetWatchedShowsApiCall} from '../shows/apiCalls/getWatchedShowsApiCall';
import {FetchService} from '../fetch.service';
import {Queue} from '../queue/queue';
import {View} from '../model/view';
import {GetRecentTracksApiCall} from '../music/apiCalls/GetRecentTracksApiCall';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public looper: any;

  constructor(private fetchService: FetchService, private queue: Queue, private view: View) { }

  ngOnInit() {
  }

  onStopButtonClick(e) {
    this.stopLooper();
  }

  onStartButtonClick(e) {
    this.startLooper();
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

  onAddItemToQueueClick(e) {
    const queueItem = new GetWatchedShowsApiCall(this.fetchService, this.view, this.queue);
    this.queue.push(queueItem);
  }

  onPrintItemsClick(e) {
    this.queue.print();
  }

  public addMusic(e) {
    const queueItem = new GetRecentTracksApiCall(this.fetchService, this.view, this.queue);
    this.queue.push(queueItem);
  }

}
