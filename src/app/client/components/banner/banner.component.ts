import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ["https://avatar-ex-swe.nixcdn.com/slideshow/2021/09/17/1/e/5/5/1631871506418_org.jpg", "https://avatar-ex-swe.nixcdn.com/slideshow/2021/09/17/1/e/5/5/1631870295892_org.jpg", "https://avatar-ex-swe.nixcdn.com/slideshow/2021/09/16/9/f/9/e/1631760979294_org.jpg"];

}
