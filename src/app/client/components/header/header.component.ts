import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  genres = [
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
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
