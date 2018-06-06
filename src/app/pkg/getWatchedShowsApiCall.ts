import { GetTVDBShowDetailsApiCall } from './getTVDBShowDetailsApiCall';
import { HttpHeaders } from '@angular/common/http';
import { ApiItem } from './../model/apiItem';
import { Show } from './../model/show';
import { AbstractApiCall } from './abstractApiCall';

export class GetWatchedShowsApiCall extends AbstractApiCall {

    public getRequest(): ApiItem {
        return new ApiItem('https://api.trakt.tv/users/robo300/watched/shows', this.getHeaders());
    }

    public getHeaders(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': '8648134a8c6bcca69dd1349138a3b6f0e5839fc5a18e2dea8e1485e6ba249dfb'
            })
        };
    }

    public doSomethingWithResponse(response: any) {
        for (const show of response) {
            const showObj = new Show(show.show.title);
            showObj.setLastWatchedAt(show.last_watched_at);
            this.view.addShow(showObj);
            const queueItem = new GetTVDBShowDetailsApiCall(this.fetchService, this.view, this.queue, showObj);
            queueItem.additionalData = {'tmdb': show.show.ids.tmdb};
            this.queue.push(queueItem);
        }
    }
}
