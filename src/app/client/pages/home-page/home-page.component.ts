import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public songs:any;
  public getSong:string[]=[];
  public dataSong:any

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
      {
        id: 2,
        genre: 1,
        url: '../assets/NguoiKhocCungAnh-HoQuangHieu-6998990.mp3',
        name: 'Người khóc cùng anh',
        singer: 'Hồ Quang Hiếu',
        img: 'https://i.ytimg.com/vi/5XlX0VEn7ys/maxresdefault.jpg',
        view: 31,
      },
      {
        id: 3,
        genre: 3,
        url: '../assets/AnhChangSaoMa-KhangViet-5414914.mp3',
        name: 'Anh chẳng sao mà',
        singer: 'Khang Việt',
        img: 'https://i.ytimg.com/vi/zlEfoN7nP1A/maxresdefault.jpg',
        view: 84,
      },
      {
        id: 4,
        genre: 4,
        url: '../assets/AnhMetRoi-AnhQuanIdol-6720878.mp3',
        name: 'Anh mệt rồi',
        singer: 'Anh Quân Idol',
        img: 'https://i.ytimg.com/vi/wAQnEYVcOq4/maxresdefault.jpg',
        view: 15,
      },
      {
        id: 5,
        genre: 1,
        url: '../assets/ChangGiDepDeTrenDoiMai-KhangViet-5183426.mp3',
        name: 'Chẳng gì đẹp đẽ trên đời mãi',
        singer: 'Khang Việt',
        img: 'https://i.ytimg.com/vi/HITH-RzNRu0/maxresdefault.jpg',
        view: 465,
      }
    ];
  }
  getLoadSongParent(data:any){
    this.dataSong = data

  }
}
