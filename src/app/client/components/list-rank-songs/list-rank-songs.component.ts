import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-rank-songs',
  templateUrl: './list-rank-songs.component.html',
  styleUrls: ['./list-rank-songs.component.css']
})
export class ListRankSongsComponent implements OnInit {
  @Input() rankSongs:any
  @Output() getLoadSong = new EventEmitter<any>();

  colors = ["#DC143C", "#006400", "#FF8C00", "blu#9932CCe", "#8FBC8F", "#00BFFF", "#FFEBCD", "#A52A2A", "#696969", "#000000"]
  constructor() { }

  ngOnInit(): void {
  }
  getSong(data: any) {
    this.getLoadSong.emit(data);
  }
}
