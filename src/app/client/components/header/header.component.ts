import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public categories:any
  
  constructor(private cateService: CategoryService) {}

  ngOnInit(): void {
    this.cateService.list().subscribe((data) => {
      this.categories = data;
    });
  }
}
