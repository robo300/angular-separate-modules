import { GetShowsImageUrlApiCall } from './getShowsImageUrlApiCall';
import { ApiItem } from '../../model/apiItem';
import { AbstractApiCall } from '../../pkg/abstractApiCall';

export class GetTVDBShowDetailsApiCall extends AbstractApiCall {

    public tmdbApiKey = '9604e1ac08c35ab5dbe3cae35f8af18f';
    public additionalData = {};

    public doSomethingWithResponse(response: any) {
        this.parent.setImage('http://image.tmdb.org/t/p/w185' + response.poster_path);

    }
    public getRequest(): ApiItem {
        const url = 'https://api.themoviedb.org/3/tv/' + this.additionalData['tmdb'] + '?api_key=' + this.tmdbApiKey;
        return new ApiItem(url, this.getHeaders());
    }
    public getHeaders() {
        return null;
    }
}
