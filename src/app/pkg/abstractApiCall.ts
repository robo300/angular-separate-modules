import { Queue } from './../queue/queue';
import { FetchService } from './../fetch.service';
import { View } from './../model/view';
import { ApiItem } from './../model/apiItem';

export abstract class AbstractApiCall {

    constructor(protected fetchService: FetchService, protected view: View, protected queue: Queue, protected parent?: any) { }

    public getDataFromApi() {
        this.fetchService.getDataFromUrl(this.getRequest().getUrl(), this.getRequest().getHeaders()).subscribe(response => {
            this.doSomethingWithResponse(response);
        });
    }

    public abstract doSomethingWithResponse(response: any);

    public abstract getRequest(): ApiItem;

    public abstract getHeaders(): any;
}
