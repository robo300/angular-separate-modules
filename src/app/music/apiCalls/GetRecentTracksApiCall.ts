import { ApiItem } from './../../model/apiItem';
import { AbstractApiCall } from '../../pkg/abstractApiCall';
import { Track } from '../models/Track';

export class GetRecentTracksApiCall extends AbstractApiCall {

    public doSomethingWithResponse(response: any) {
        for (const track of response.recenttracks.track) {
            const trackName = track.name;
            const trackArtist = track.artist['#text'];
            const trackImage = track.image[2]['#text'];
            console.log(`${trackArtist} - ${trackName}`);
            this.view.addTrack(new Track(trackName, trackArtist, trackImage));
        }
    }
    public getRequest(): ApiItem {
        // tslint:disable-next-line:max-line-length
        return new ApiItem('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=robertwtf&api_key=2e4f87b49e793bc1bbb1566cf7dbe34f&format=json', this.getHeaders());
    }
    public getHeaders() {
        return null;
    }
}
