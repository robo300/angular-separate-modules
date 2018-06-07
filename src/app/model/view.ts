import { Show } from '../shows/models/show';
export class View {
    private shows: Array<Show> = [];

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
}
