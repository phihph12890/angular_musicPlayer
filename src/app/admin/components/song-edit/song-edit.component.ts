import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { SongService } from 'src/app/service/song.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css'],
})
export class SongEditComponent implements OnInit {
  public id_category: any;
  public id_song: any;
  public current_song: any;
  public listCateRelated: any;

  uploadPercentAlbum: any;
  uploadPercentSong: any;
  isUploadingAlbum: boolean = false;
  isUploadingSong: boolean = false;

  songForm: FormGroup;
  public taskAlbum: AngularFireUploadTask;
  public taskSong: AngularFireUploadTask;
  public image: any;
  public image_url: any;
  public song: any;
  public song_url: any;

  constructor(
    private router: Router,
    public cateService: CategoryService,
    public songService: SongService,
    public toastr: ToastrService,
    private fb: FormBuilder,
    public storage: AngularFireStorage
  ) {
    this.id_song = router.url.split('/')[3];
    console.log('id_song', this.id_song);

    songService.read(this.id_song).subscribe((dataSong) => {
      this.id_category = dataSong.category._id;
      this.current_song = dataSong;
      console.log('current_song---', this.current_song.category);

      this.songForm.setValue(
        { 
          category: dataSong.category,
          name: dataSong.name,
          singer: dataSong.singer,
          image: dataSong.image,
          url: dataSong.url,
        });
      console.log(this.songForm.value);

      cateService.listRelated(this.id_category).subscribe((dataCate) => {
        this.listCateRelated = dataCate;
        console.log('listCateRelated---', this.listCateRelated);
      });
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
    let newSongUpdate:any;
    if(this.image_url == undefined && this.song_url != undefined) {
      newSongUpdate = {
        ...this.songForm.value,
        url: this.song_url,
      };
    } else if(this.song_url == undefined && this.image_url != undefined){
      newSongUpdate = {
        ...this.songForm.value,
        image: this.image_url,
      };
    } else if( this.song_url != undefined && this.image_url != undefined){
      newSongUpdate = {
        ...this.songForm.value,
        image: this.image_url,
        url: this.song_url,
      }
    } else {
      newSongUpdate = {
        ...this.songForm.value,
      }
    }
    console.log(newSongUpdate);
    this.songService.update(this.id_song, newSongUpdate).subscribe((data) => {
      this.toastr.success('Sửa bài hát thành công!');
      this.router.navigate(['/admin/song-manager']);
    });
    
  }
}
