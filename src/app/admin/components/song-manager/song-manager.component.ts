import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../service/song.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-song-manager',
  templateUrl: './song-manager.component.html',
  styleUrls: ['./song-manager.component.css'],
})
export class SongManagerComponent implements OnInit {
  public songs: any;
  constructor(public songService: SongService, public toastr: ToastrService) {
    songService.list().subscribe((data) => {
      this.songs = data;
    });
  }

  ngOnInit(): void {}

  btnClickDelete(removeId: any) {
    const Confirm = confirm('Bạn có thật sự muốn xoá bài hát này?');
    if (Confirm) {
      this.songService.delete(removeId).subscribe((data) => {
        console.log(data);
        this.toastr.success("Xoá thành công!");
        location.reload();
      });
    }
  }
}
