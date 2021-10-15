import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  public songs: any;
  public dataSong: any;
  public categories: any;
  id_cate: any;
  title_cate = '';
  constructor(
    public route: ActivatedRoute,
    public cateService: CategoryService,
    public songService: SongService
  ) {
    route.params.subscribe((obj) => {
      this.id_cate = obj.id;
      console.log('id_cate', this.id_cate);
      cateService.read(this.id_cate).subscribe((data) => {
        this.title_cate = data.name;
      });
      songService.listByCate(this.id_cate).subscribe((data) => {
        this.songs = data;
      });
    });
    
  }

  ngOnInit(): void {
    this.songs = [
      {
        id: 0,
        genre: 1,
        url: '../assets/Thức Giấc - Blue.mp3',
        name: 'Thức giấc - Blue',
        singer: 'Dalab',
        img: 'https://avatar-ex-swe.nixcdn.com/song/share/2021/07/14/f/9/f/e/1626231011678.jpg',
        view: 120,
      },
      {
        id: 1,
        genre: 2,
        url: '../assets/Người Ấy - Trịnh Thăng Bình - Anh Tú (Cover).mp3',
        name: 'Người ấy',
        singer: 'Trịnh Thăng Bình',
        img: 'https://i.ytimg.com/vi/1Tj1wSfRkZg/maxresdefault.jpg',
        view: 48,
      },
    ];
    this.cateService.list().subscribe((data) => {
      this.categories = data;
    });
  }

  getCategory() {
    this.id_cate = this.route.snapshot.paramMap.get('id');
    console.log('id:', this.id_cate);
    this.cateService.read(this.id_cate).subscribe((data) => {
      this.title_cate = data.name;
    });
  }
  getLoadSongParent(data: any) {
    this.dataSong = data;
  }
}
