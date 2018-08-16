import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {WatchedShow} from '../../shows/models/watchedShowsModel';

@Injectable()
export class FetchService {

    constructor(private http: HttpClient) { }

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

  public getDataFromUrl2(): Observable<any> {
    return this.http.get<WatchedShow[]>('https://api.trakt.tv/users/robo300/watched/shows', this.getHeaders());
  }

  private getHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': '8648134a8c6bcca69dd1349138a3b6f0e5839fc5a18e2dea8e1485e6ba249dfb'
      })
    };
  }
}
