import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  public songs:any;
  constructor() { }

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
  }
  songbyCate = [

  ]
}
