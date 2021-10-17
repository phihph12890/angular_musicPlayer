import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { SongService } from '../../../service/song.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css'],
})
export class SongAddComponent implements OnInit {
  public categories: any;
  uploadPercentAlbum: any;
  uploadPercentSong: any;
  isUploadingAlbum: boolean = false;
  isUploadingSong: boolean = false;

  isCompleteUploadingAlbum: boolean = false;
  isCompleteUploadingSong: boolean = false;

  songForm: FormGroup;
  public taskAlbum: AngularFireUploadTask;
  public taskSong: AngularFireUploadTask;
  public image: any;
  public image_url: any;
  public song: any;
  public song_url: any;
  constructor(
    public cateService: CategoryService,
    public songService: SongService,
    public toastr: ToastrService,
    public router: Router,
    public fb: FormBuilder,
    public storage: AngularFireStorage
  ) {
    cateService.list().subscribe((data) => {
      this.categories = data;
    });
    this.songForm = this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      singer: ['', Validators.required],
      image: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  get f() {
    return this.songForm.controls;
  }

  ngOnInit(): void {}

  selectAlbum(e: any) {
    this.image = e.target.files[0];
    const imgRef = this.storage.ref(`images/${this.image.name}`);
    this.taskAlbum = imgRef.put(this.image);
    this.isUploadingAlbum = true;
    this.uploadPercentAlbum = this.taskAlbum.percentageChanges();
    this.taskAlbum
      .snapshotChanges()
      .pipe(
        finalize(() => {
          imgRef.getDownloadURL().subscribe((url: any) => {
            console.log(url);
            this.image_url = url;
            this.toastr.success('Uploaded Album!');
          });
        })
      )
      .subscribe();
  }
  selectSong(e: any) {
    this.song = e.target.files[0];
    const songRef = this.storage.ref(`songs/${this.song.name}`);
    this.taskSong = songRef.put(this.song);
    this.isUploadingSong = true;
    this.uploadPercentSong = this.taskSong.percentageChanges();
    this.taskSong
      .snapshotChanges()
      .pipe(
        finalize(() => {
          songRef.getDownloadURL().subscribe((url: any) => {
            console.log(url);
            this.song_url = url;
            this.toastr.success('Uploaded Song!');
          });
        })
      )
      .subscribe();
  }

  onSubmit() {
    let newSong = {
      ...this.songForm.value,
      image: this.image_url,
      url: this.song_url,
    };
    this.songService.create(newSong).subscribe((data) => {
      this.toastr.success('Thêm bài hát thành công!');
      this.router.navigate(['/admin/song-manager']);
    });
  }
}
