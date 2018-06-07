import * as moment from 'moment';

export class Show {
    private title: string;
    private image: string;
    private last_watched_at: Date;

    constructor(title: string, image?: string) {
        this.title = title;
        this.image = image;
    }

    public getTitle(): string {
        return this.title;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setLastWatchedAt(date: string): void {
        this.last_watched_at = new Date(Date.parse(date));
    }

    public getLastWatchedAt(): string {
        return this.last_watched_at.toISOString();
    }

    public getWatchedHowLongFromNow(): string {
        const last_watched_at = moment(this.last_watched_at);
        return last_watched_at.fromNow();
    }
}
