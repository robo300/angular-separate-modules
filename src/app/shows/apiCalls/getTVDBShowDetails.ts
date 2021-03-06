import { GetShowsImageUrl } from './getShowsImageUrl';
import { ApiItem } from '../../core/model/apiItem';
import { AbstractApiCall } from '../../core/pkg/abstractApiCall';

export class GetTVDBShowDetails extends AbstractApiCall {

    public tmdbApiKey = '9604e1ac08c35ab5dbe3cae35f8af18f';
    public additionalData = {};

    public doSomethingWithResponse(response: any) {
        this.parent.setImage('http://image.tmdb.org/t/p/w500' + response.poster_path);

    }
    public getRequest(): ApiItem {
        const url = 'https://api.themoviedb.org/3/tv/' + this.additionalData['tmdb'] + '?api_key=' + this.tmdbApiKey;
        return new ApiItem(url, this.getHeaders());
    }
    public getHeaders() {
        return null;
    }
}
