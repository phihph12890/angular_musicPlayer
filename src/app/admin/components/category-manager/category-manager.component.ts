import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css'],
})
export class CategoryManagerComponent implements OnInit {
  public categories: any;
  dataEdit:any[]=[]
  constructor(public cateService: CategoryService) {
    cateService.list().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {}
  
  btnClickDelete(removeId: any) {
    this.cateService.delete(removeId).subscribe(data => {
      console.log(data);
      console.log("xoá thành công");
      location.reload();
    })
  }
}
