import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { FetchService } from './fetch.service';
import { QueueComponent } from './queue/queue.component';
import { Queue } from './queue/queue';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    QueueComponent
],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [FetchService, Queue],
  bootstrap: [AppComponent]
})
export class AppModule { }
