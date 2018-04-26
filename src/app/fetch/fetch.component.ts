import { Requests } from './../requests.enum';
import { RequestDelegateParams } from './../requestDelegateParams';
import { Data3 } from './../models/data3';
import { Response1 } from './../models/response1';
import { Matches } from './../models/matches';
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { Queue } from '../queue/queue';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  public data: Response1;
  public matches: Data3[];

  constructor(private fetchService: FetchService, private queue: Queue) { }

  ngOnInit() {
  }

  onClick(e) {
    const getPlayerHistoryRequest = new RequestDelegateParams(Requests.GET_PLAYER_HISTORY, '');
    this.queue.push(getPlayerHistoryRequest);
    this.fetchService.getMatches().subscribe(res1 => {
      this.data = res1;
      this.matches = res1.data[0].relationships.matches.data;
      // this.queueService.pushArray(this.matches);
      const source = from(this.matches);
      const example = source.pipe(map(val => this.queue.push(new RequestDelegateParams(Requests.GET_MATCH, val.id))))
      .subscribe(v => console.log(this.queue));
    }, error => {
      console.log(error);
      console.log('error status: ' + error.status + ' error message: ' + error.error);
    });
  }
}
