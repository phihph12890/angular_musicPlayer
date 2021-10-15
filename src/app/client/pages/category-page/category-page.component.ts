import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../service/category.service';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  public songs: any;
  public dataSong: any;
  public categories: any;
  id_cate: any;
  title_cate = '';
  constructor(
    public route: ActivatedRoute,
    public cateService: CategoryService,
    public songService: SongService,
    public toastr: ToastrService
  ) {
    route.params.subscribe((obj) => {
      this.id_cate = obj.id;
      console.log('id_cate', this.id_cate);
      cateService.read(this.id_cate).subscribe((data) => {
        this.title_cate = data.name;
      });
      songService.listByCate(this.id_cate).subscribe((data) => {
        this.songs = data;
        console.log(this.songs);
      });
    });
    
  }

  ngOnInit(): void {
    
    this.cateService.list().subscribe((data) => {
      this.categories = data;
    });
  }

  getCategory() {
    this.id_cate = this.route.snapshot.paramMap.get('id');
    console.log('id:', this.id_cate);
    this.cateService.read(this.id_cate).subscribe((data) => {
      this.title_cate = data.name;
    });
  }
  getLoadSongParent(data: any) {
    this.dataSong = data;
    this.toastr.success("Thêm vào PlayList thành công!");
  }
}
