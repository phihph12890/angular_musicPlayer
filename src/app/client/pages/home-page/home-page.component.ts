import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public songs: any;
  public dataSong: any;

  constructor(public songService: SongService) {}

  ngOnInit(): void {
    this.songService.listLimit().subscribe((data) => {
      this.songs = data;
      console.log(this.songs);
    });
  }
  getLoadSongParent(data: any) {
    this.dataSong = data;
    
  }
}
