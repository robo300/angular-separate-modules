import { ApiItem } from './../../model/apiItem';
import { AbstractApiCall } from '../../pkg/abstractApiCall';
import {TrackResponse} from '../models/response/trackResponse';
import {Track} from '../models/Track';
import {Keys} from '../keys';

export class GetRecentTracksApiCall extends AbstractApiCall {

    public doSomethingWithResponse(response: TrackResponse) {
        for (const track of response.recenttracks.track) {
            const trackName = track.name;
            const trackArtist = track.artist['#text'];
            const trackImage = track.image[2]['#text'];
            console.log(`${trackArtist} - ${trackName}`);
            this.view.addTrack(new Track(trackName, trackArtist, trackImage));
        }
    }
    public getRequest(): ApiItem {
      const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=robertwtf&api_key=';
        return new ApiItem(`${url}${Keys.API_KEY}&format=json`, this.getHeaders());
    }
    public getHeaders() {
        return null;
    }
}
