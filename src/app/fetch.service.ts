import { Observable } from 'rxjs/Observable';
import { Dog } from './model/dog';
import { Queue } from './queue/queue';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FetchService {

    constructor(private http: HttpClient, private queue: Queue) { }

    public getDataFromUrl(url: string, httpHeaders: any): Observable<any> {
        if (httpHeaders) {
            return this.http.get(url, httpHeaders).map((res) => {
                console.log(res);
                return res;
            });
        } else {
            return this.http.get(url).map((res) => {
                console.log(res);
                return res;
            });
        }
    }
}
