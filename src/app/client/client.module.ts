import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { ListRankSongsComponent } from './components/list-rank-songs/list-rank-songs.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    ClientComponent, 
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ContentComponent,
    ListSongsComponent,
    ListRankSongsComponent,
    MusicPlayerComponent,
    HomePageComponent,
    CategoryPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, FormsModule],
})
export class ClientModule {}
