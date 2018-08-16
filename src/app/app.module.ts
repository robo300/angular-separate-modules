import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { FetchService } from './core/fetch/fetch.service';
import { QueueComponent } from './queue/queue.component';
import { Queue } from './queue/queue';
import { MusicComponent } from './music/music.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule, MatIconModule, MatTabsModule} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import {ShowsService} from './shows/shows.service';
import {MusicService} from './music/music.service';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    QueueComponent,
    MusicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatGridListModule, MatIconModule, MatTabsModule, MatTooltipModule
  ],
  providers: [FetchService, Queue, ShowsService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
