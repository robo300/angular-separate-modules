import { Queue } from '../../queue/queue';
import { FetchService } from '../fetch/fetch.service';
import { ApiItem } from '../model/apiItem';
// TODO: change package name to something meaningful
export abstract class AbstractApiCall {

    constructor(protected fetchService: FetchService, protected dataContainer: any, protected queue: Queue, protected parent?: any) { }

    public getDataFromApi() {
      this.queue.setBusy();
        this.fetchService.getDataFromUrl(this.getRequest().getUrl(), this.getRequest().getHeaders()).subscribe(
          response => {
            this.queue.removeFirst();
            this.queue.setNotBusy();
            this.doSomethingWithResponse(response);
          }, error => {
            this.queue.setNotBusy();
            console.log('error during get data from api: ' + error);
          });
    }

    public abstract doSomethingWithResponse(response: any);

    public abstract getRequest(): ApiItem;

    public abstract getHeaders(): any;
}
