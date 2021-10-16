import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueCategoryName } from 'src/custom_validate/category.validator';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  cateForm: FormGroup;
  constructor(
    public cateService: CategoryService,
    public toastr: ToastrService, 
    public router:Router,
    private fb: FormBuilder
  ) {
    this.cateForm = this.fb.group({
      name: ['', Validators.required, uniqueCategoryName(this.cateService)]
    })
  }
  get f(){
    return this.cateForm.controls;
  }

  ngOnInit(): void {}
  onSubmit() {
    this.cateService.create(this.cateForm.value).subscribe((data) => {
      this.toastr.success("Thêm danh mục mới thành công!");
      this.router.navigate(['/admin/category-manager']);
    });
  }
}
