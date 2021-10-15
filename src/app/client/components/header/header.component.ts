import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public categories: any;
  keyword?:any

  constructor(
    private cateService: CategoryService,
    public router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.cateService.list().subscribe((data) => {
      this.categories = data;
    });
  }

  search() {
    this.location.replaceState(`/search?name=${this.keyword}`);
    
    location.reload();
  }
}
