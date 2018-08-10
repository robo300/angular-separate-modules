import { View } from './model/view';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { FetchService } from './fetch.service';
import { QueueComponent } from './queue/queue.component';
import { Queue } from './queue/queue';
import { MusicComponent } from './music/music.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    QueueComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [FetchService, Queue, View],
  bootstrap: [AppComponent]
})
export class AppModule { }
