import { GetRecentTracksApiCall } from './apiCalls/GetRecentTracksApiCall';
import { Queue } from './../queue/queue';
import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';
import { View } from '../model/view';
import { Track } from './models/Track';

const API_KEY = '2e4f87b49e793bc1bbb1566cf7dbe34f';
const SHARED_SECRET = '7c6a47874f7dd6c16d2804755e398fd8';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private fetchService: FetchService, private queue: Queue, private view: View) { }

  ngOnInit() {
    this.queue.registerObserver(this);
  }

  public addMusic(e) {
    const queueItem = new GetRecentTracksApiCall(this.fetchService, this.view, this.queue);
    this.queue.push(queueItem);
  }

  receiveNotification<T>(message: T): void {
    // console.log('client received notification: ' + message);
  }

  public getQueue() {
    return this.queue.getQueue();
  }

  public getTracks(): Array<Track> {
    return this.view.getTracks();
  }

}
