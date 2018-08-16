import { ApiItem } from '../../core/model/apiItem';
import { AbstractApiCall } from '../../core/pkg/abstractApiCall';

export class GetShowsImageUrl extends AbstractApiCall {

    public additionalData = {};

    public doSomethingWithResponse(response: any) {
        console.log(response);
    }
    public getRequest(): ApiItem {
        return new ApiItem('http://image.tmdb.org/t/p/w185' + this.additionalData['poster_path'], this.getHeaders());
    }
    public getHeaders() {
        return null;
    }
}
