import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../service/category.service';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  public songsByName: [] = [];
  public songsBySinger: [] = [];
  public songs:any = [];
  public dataSong: any;
  public keyword:any;
  // isSearching = false;

  constructor(
    public router: Router,
    public cateService: CategoryService,
    public songService: SongService,
    public toastr: ToastrService
  ) {
    this.keyword = router.url.split('=')[1];
    console.log(this.keyword);
    songService.searchByName(this.keyword).subscribe((data1: any) => {
      this.songsByName = data1;
      songService.searchBySinger(this.keyword).subscribe((data2: any) => {
        this.songsBySinger = data2;
        this.songs = this.songsByName.concat(this.songsBySinger);
        console.log(this.songs);
      });
    });
  }

  ngOnInit(): void {}
  
  getLoadSongParent(data: any) {
    this.dataSong = data;
    this.toastr.success("Thêm vào PlayList thành công!");
  }
}
