import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css'],
})
export class ListSongsComponent implements OnInit {
  @Input() songs: any;
  @Output() getLoadSong = new EventEmitter<any>();
  @Input() id_cate:any;
  @Input() title_cate:any;
  @Input() keyword: any
  
  
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {
  }

  getSong(data: any) {
    this.getLoadSong.emit(data);
  }
}
