import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  files = [
    {
      id: 0,
      url: '../assets/Thức Giấc - Blue.mp3',
      name: 'Thức giấc - Blue',
      singer: 'Dalab',
      img: 'https://avatar-ex-swe.nixcdn.com/song/share/2021/07/14/f/9/f/e/1626231011678.jpg',
      view: 120
    },
    {
      id: 1,
      url: '../assets/Người Ấy - Trịnh Thăng Bình - Anh Tú (Cover).mp3',
      name: 'Người ấy',
      singer: 'Trịnh Thăng Bình',
      img: 'https://i.ytimg.com/vi/1Tj1wSfRkZg/maxresdefault.jpg',
      view: 48
    },
    {
      id: 2,
      url: '../assets/NguoiKhocCungAnh-HoQuangHieu-6998990.mp3',
      name: 'Người khóc cùng anh',
      singer: 'Hồ Quang Hiếu',
      img: 'https://i.ytimg.com/vi/5XlX0VEn7ys/maxresdefault.jpg',
      view: 31
    },
    {
      id: 3,
      url: '../assets/AnhChangSaoMa-KhangViet-5414914.mp3',
      name: 'Anh chẳng sao mà',
      singer: 'Khang Việt',
      img: 'https://i.ytimg.com/vi/zlEfoN7nP1A/maxresdefault.jpg',
      view: 84
    },
    {
      id: 4,
      url: '../assets/AnhMetRoi-AnhQuanIdol-6720878.mp3',
      name: 'Anh mệt rồi',
      singer: 'Anh Quân Idol',
      img: 'https://i.ytimg.com/vi/wAQnEYVcOq4/maxresdefault.jpg',
      view: 15
    },
    {
      id: 5,
      url: '../assets/ChangGiDepDeTrenDoiMai-KhangViet-5183426.mp3',
      name: 'Chẳng gì đẹp đẽ trên đời mãi',
      singer: 'Khang Việt',
      img: 'https://i.ytimg.com/vi/HITH-RzNRu0/maxresdefault.jpg',
      view: 465
    },
    {
      id: 6,
      url: '../assets/CuocSongEmOnKhong-AnhTuTheVoice-5404548.mp3',
      name: 'Cuộc sống em ổn không?',
      singer: 'Anh Tú TheVoice',
      img: 'https://i.ytimg.com/vi/mJMR2RetTks/maxresdefault.jpg',
      view: 165
    },
    {
      id: 7,
      url: '../assets/AnhKhacHayEmKhac-KhacViet_3ec8n.mp3',
      name: 'Anh khác hay em khác?',
      singer: 'Khắc Việt',
      img: 'https://i.ytimg.com/vi/ZTbKpBzL7hE/maxresdefault.jpg',
      view: 635
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
