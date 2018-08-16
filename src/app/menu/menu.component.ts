import {Component, OnInit} from '@angular/core';
import {interval} from '../../../node_modules/rxjs/observable/interval';
import {GetWatchedShows} from '../shows/apiCalls/getWatchedShows';
import {FetchService} from '../core/fetch/fetch.service';
import {Queue} from '../queue/queue';
import {GetRecentTracksApiCall} from '../music/apiCalls/GetRecentTracksApiCall';
import {ShowsService} from '../shows/shows.service';
import {MusicService} from '../music/music.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public looper: any;

  constructor(private fetchService: FetchService, private queue: Queue, private showsContainer: ShowsService,
              private musicContainer: MusicService) {
  }

  ngOnInit() {
  }

  onStopButtonClick() {
    this.stopLooper();
  }

  onStartButtonClick() {
    this.startLooper();
  }

  private startLooper() {
    this.looper = interval(100).subscribe(() => {
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

  onAddItemToQueueClick() {
    const queueItem = new GetWatchedShows(this.fetchService, this.showsContainer, this.queue);
    this.queue.push(queueItem);
  }

  onPrintItemsClick() {
    this.queue.print();
  }

  public addMusic() {
    const queueItem = new GetRecentTracksApiCall(this.fetchService, this.musicContainer, this.queue);
    this.queue.push(queueItem);
  }

}
