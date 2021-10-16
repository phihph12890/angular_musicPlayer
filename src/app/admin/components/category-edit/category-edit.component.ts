import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  public id_cate: any;
  public data_cate:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    public cateService: CategoryService
  ) {
    this.id_cate = router.url.split('/')[3];
    console.log(this.id_cate);
    cateService.read(this.id_cate).subscribe((data) => {
      this.data_cate = data;
    });
  }

  ngOnInit(): void {}
  update(){
    console.log(2);
  }
}
