import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  public songs:any;
  public categories:any;
  id_cate = 0;
  title_cate = '';
  constructor(public route: ActivatedRoute) { }

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
    this.categories = [
      {
        id: 1,
        name: 'Nhạc trẻ',
      },
      {
        id: 2,
        name: 'Nhạc Cách mạng',
      },
      {
        id: 3,
        name: 'Rap Việt',
      },
      {
        id: 4,
        name: 'Nhạc Vàng',
      },
    ]
    this.getCategory();
  }

  getCategory() {
    this.id_cate = this.route.snapshot.params['id'];
    console.log('id:', this.id_cate);
    let dataCategory = this.categories.filter((e:any) => {
      return e.id == this.id_cate;
    });
    if (dataCategory.length > 0) {
      this.title_cate = dataCategory[0].name;
      console.log(this.title_cate);
    }
  }
}
