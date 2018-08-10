export class Track {
    private title: string;
    private artist: string;
    private image: string;

    constructor(title: string, artist: string, image: string) {
        this.title = title;
        this.artist = artist;
        this.image = image;
    }

    public getTitle(): string {
        return this.title;
    }

    public getArtist(): string {
        return this.artist;
    }

    public getImage(): string {
      return this.image;
    }
}
