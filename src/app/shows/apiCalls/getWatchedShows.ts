import { GetTVDBShowDetails } from './getTVDBShowDetails';
import { HttpHeaders } from '@angular/common/http';
import { ApiItem } from '../../core/model/apiItem';
import { AbstractApiCall } from '../../core/pkg/abstractApiCall';
import { from } from 'rxjs/observable/from';
import { WatchedShow } from '../models/watchedShowsModel';

export class GetWatchedShows extends AbstractApiCall {

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

    public doSomethingWithResponse(response: WatchedShow[]) {
      const source$ = from(response);
      source$.subscribe((show: WatchedShow) => {
        const wShow = new WatchedShow(show); // TODO: change variable name
        this.dataContainer.addShow(wShow);
        const queueItem = new GetTVDBShowDetails(this.fetchService, this.dataContainer, this.queue, wShow);
        queueItem.additionalData = {'tmdb': wShow.show.ids.tmdb};
        this.queue.push(queueItem);
      });
    }
}
