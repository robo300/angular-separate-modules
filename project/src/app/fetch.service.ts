import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchService {

constructor(private http: HttpClient) { }

public getData() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
}

}
