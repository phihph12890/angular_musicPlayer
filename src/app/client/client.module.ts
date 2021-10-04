import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { ListRankSongsComponent } from './components/list-rank-songs/list-rank-songs.component';
import { RankSongComponent } from './components/rank-song/rank-song.component';
import { SongComponent } from './components/song/song.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';


@NgModule({
  declarations: [
    ClientComponent, 
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ContentComponent,
    ListSongsComponent,
    ListRankSongsComponent,
    RankSongComponent,
    SongComponent,
    MusicPlayerComponent
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
