import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  public data = new Object();

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
  }

  onClick(e) {
    this.fetchService.getData().subscribe(res => this.data = res);
  }

}
