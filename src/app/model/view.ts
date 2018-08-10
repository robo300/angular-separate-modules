import { Track } from './../music/models/Track';
import { Show } from '../shows/models/show';
export class View {
    private shows: Array<Show> = [];
    private tracks: Array<Track> = [];

    constructor() {
        console.log('view constructor');
    }

    public getShows(): Array<Show> {
        return this.shows;
    }

    public setShows(shows: Array<Show>): void {
        this.shows = shows;
    }

    public addShow(show: Show): void {
        this.shows.push(show);
    }

    public getFirstShow(): Show {
        return this.shows[0];
    }

    public getTracks(): Array<Track> {
        return this.tracks;
    }

    public addTrack(track: Track): void {
        this.tracks.push(track);
    }
}
