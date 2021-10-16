import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { uniqueCategoryName } from 'src/custom_validate/category.validator';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  public id_cate: any;
  cateForm: FormGroup;
  constructor(
    private router: Router,
    public cateService: CategoryService,
    public toastr: ToastrService, 
    private fb: FormBuilder
  ) {
    this.id_cate = router.url.split('/')[3];
    console.log(this.id_cate);
    cateService.read(this.id_cate).subscribe((data) => {
      console.log(data);
      this.cateForm.setValue({name: data.name})

    });
    this.cateForm = this.fb.group({
      name: ['', Validators.required, uniqueCategoryName(this.cateService)]
    })
  }
  get f(){
    return this.cateForm.controls;
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.cateService.update(this.id_cate, this.cateForm.value).subscribe((data) => {
      this.toastr.success("Sửa danh mục thành công!");
      this.router.navigate(['/admin/category-manager']);
    });
  }
}
