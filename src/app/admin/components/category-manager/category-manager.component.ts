import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css'],
})
export class CategoryManagerComponent implements OnInit {
  public categories: any;
  constructor(
    public cateService: CategoryService,
    public toastr: ToastrService
  ) {
    cateService.list().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {}
  
  btnClickDelete(removeId: any) {
    const Confirm = confirm('Bạn có thật sự muốn xoá danh mục này?');
    if (Confirm) {
      this.cateService.delete(removeId).subscribe((data) => {
        console.log(data);
        this.toastr.success("Xoá thành công!");
        location.reload();
      });
    }
  }
}
