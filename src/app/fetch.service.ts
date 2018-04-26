import { RequestDelegateParams } from './requestDelegateParams';
import { Queue } from './queue/queue';
import { Data3 } from './models/data3';
import { Matches } from './models/matches';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response1 } from './models/response1';
import 'rxjs/add/operator/catch';
import { Requests } from './requests.enum';

// tslint:disable-next-line:max-line-length
const TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZWZkOTA0MC0yOGZiLTAxMzYtZTM5YS0wOTkxMzhmZmQ5ZTEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NDcwOTkxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNvbWUtYXBwIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.mMABFwxuQE19WG3fGH1Hrb3Er15hLIlhUVuHTN_u_1o`;

const httpOptions = {
    headers: new HttpHeaders({
        'accept': 'application/vnd.api+json',
        'Authorization': 'Bearer ' + TOKEN
    })
};


@Injectable()
export class FetchService {

    constructor(private http: HttpClient, private queue: Queue) { }

    public getMatches(): Observable<any> {
        return this.http.get<Response1>('https://api.playbattlegrounds.com/shards/pc-eu/players?filter[playerNames]=Janusz_Alfa',
            httpOptions)
            .map((res: Response1) => {
                console.log('GET_MATCHES: RECEIVED JSON FROM API');
                // this.queue.pushArray(res.data[0].relationships.matches.data);
                return res;
            });
    }

    public getMatch(matchId: string): Observable<any> {
        return this.http.get('https://api.playbattlegrounds.com/shards/pc-eu/matches/' + matchId, httpOptions)
            .map((res) => {
                console.log('GET_MATCH: RECEIVED JSON FROM API');
                console.log(res);
            });
    }

    public getMatchesFromArray(matchArray: Array<Data3>) {
        for (const match of matchArray) {
            this.getMatch(match.id).subscribe(res => {
                console.log('subscribed match: ' + JSON.stringify(match));
            });
        }
    }

    public delegate(params: RequestDelegateParams) {
        switch (params.requestType) {
            case Requests.GET_PLAYER_HISTORY: {
                return this.getMatches();
            }
            case Requests.GET_MATCH: {
                return this.getMatch(params.id);
            }
            default: {
                throw new Error('Now supported requestType for delegation');
            }
        }
    }

    public startFetchingWithQueue() {
        console.log('a');
    }

}
