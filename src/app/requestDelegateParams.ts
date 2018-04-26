import { Requests } from './requests.enum';
export class RequestDelegateParams {
    // requestType: Requests;
    // id: string;

    constructor(public requestType: Requests, public id: string) {}
}
