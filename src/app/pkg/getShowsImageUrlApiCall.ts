import { ApiItem } from './../model/apiItem';
import { AbstractApiCall } from './abstractApiCall';

export class GetShowsImageUrlApiCall extends AbstractApiCall {

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
