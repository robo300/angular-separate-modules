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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule, MatIconModule, MatTabsModule} from '@angular/material';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    QueueComponent,
    MusicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatGridListModule, MatIconModule, MatTabsModule
  ],
  providers: [FetchService, Queue, View],
  bootstrap: [AppComponent]
})
export class AppModule { }
