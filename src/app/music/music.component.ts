import {Queue} from './../queue/queue';
import {FetchService} from '../core/fetch/fetch.service';
import {Component, OnInit} from '@angular/core';
import {Track} from './models/Track';
import {MusicService} from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private fetchService: FetchService, private queue: Queue, private musicService: MusicService) {
  }

  ngOnInit() {
  }

  public getTracks(): Array<Track> {
    return this.musicService.getTracks();
  }

  public getLastListenedSong(): Track {
    return this.getTracks()[0];
  }

}
