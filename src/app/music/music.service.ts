import { Injectable } from '@angular/core';
import {Track} from './models/Track';

@Injectable()
export class MusicService {

  private tracks: Array<Track> = [];

  constructor() { }

  public getTracks(): Array<Track> {
    return this.tracks;
  }

  public addTrack(track: Track): void {
    this.tracks.push(track);
  }

}
