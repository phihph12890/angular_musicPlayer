import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SongService } from '../../../service/song.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public songs: any;
  public dataSong: any;
  public rankSongs: any;

  constructor(public songService: SongService, public toastr: ToastrService, public router:Router) {
  }

  ngOnInit(): void {
    this.songService.listLimit().subscribe((data) => {
      this.songs = data;
    });
    this.songService.sortView().subscribe((data) => {
      this.rankSongs = data;
    });
  }
  getLoadSongParent(data: any) {
    this.dataSong = data;
    this.toastr.success("Thêm vào PlayList thành công!");
  }
}
