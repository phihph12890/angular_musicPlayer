import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit, OnChanges {
  @Input() playList: any;

  isPlaying = false;
  isRandom = false;
  isRepeat = false;
  progressPercent: number = 0;
  volume: number = 0.8;
  song_duration: number = 0;
  song_durationString: string = '';
  song_currentTimeString: string = '00:00';

  audioObj = new Audio();

  songs = [
    {
      view: 0,
      _id: '61685b43dfaea8493c41fa36',
      category: {
        _id: '616847fb34556933f4d1dd91',
        name: 'Nhạc Rap, HipHop',
      },
      name: '2AM',
      image:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/3/4/34b2e5792d3f467216560a317a6ff7f2_1460691568.jpg',
      singer: 'JustaTee, BigDaddy',
      url: 'https://mp3-320s1-zmp3.zadn.vn/870b53eff5ab1cf545ba/7451055051003544818?authen=exp=1634401788~acl=/870b53eff5ab1cf545ba/*~hmac=baa90fe28668e5ee94a837419c5f327d&fs=MTYzNDIyODk4ODQyMnx3ZWJWNnwxMDmUsIC1OTE5OTYxfDExMy4xNjgdUngNTIdUngMTmUsIC0',
      createdAt: '2021-10-14T16:30:59.424Z',
      updatedAt: '2021-10-14T16:30:59.424Z',
      __v: 0,
    },
  ];
  currentIndex = this.songs.length - 1;

  // lấy thông tin bài hát hiện tại
  getCurrentSong() {
    return this.songs[this.currentIndex];
  }

  //tải thông tin bài hát hiện tại
  loadCurrentSong() {
    this.audioObj.src = this.getCurrentSong().url;
    this.audioObj.load();
  }

  start() {
    //tải thông tin bài hát đầu tiên khi chạy web
    this.loadCurrentSong();
    this.seeking();
    this.ended();
  }

  constructor(public songService: SongService) {}

  ngOnInit(): void {
    if (localStorage.getItem('playList')) {
      this.songs = JSON.parse(localStorage.getItem('playList')!);
    }
    this.currentIndex = this.songs.length - 1;

    this.start();
  }

  getSongById() {
    this.songService.read(this.getCurrentSong()._id).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.playList.currentValue != undefined) {
      let view = changes.playList.currentValue.view;
      view++;
      console.log(view);
      const newData = {
        category: `${changes.playList.currentValue.category._id}`,
        name: `${changes.playList.currentValue.name}`,
        image: `${changes.playList.currentValue.image}`,
        singer: `${changes.playList.currentValue.singer}`,
        url: `${changes.playList.currentValue.url}`,
        view: `${view}`,
      };
      this.songService
        .update(changes.playList.currentValue._id, newData)
        .subscribe((data) => {
          console.log("OK");
        });

      
      let existed = this.songs.findIndex(
        (element) => element._id == changes.playList.currentValue._id
      );
      if (existed == -1) {
        this.songs.push(changes.playList.currentValue);
        localStorage.setItem('playList', JSON.stringify(this.songs));
        this.currentIndex++;
      } else {
        this.songs.splice(existed, 1);
        this.songs.push(changes.playList.currentValue);
        localStorage.setItem('playList', JSON.stringify(this.songs));
      }

      if (localStorage.getItem('playList')) {
        this.songs = JSON.parse(localStorage.getItem('playList')!);
      }
      this.loadCurrentSong();
      this.play();
    }
  }

  //chức năng bật tắt play/pause
  onPlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying == true) {
      this.play();
    } else {
      this.pause();
    }
  }

  //chức năng bật tắt random
  onRandom() {
    this.isRandom = !this.isRandom;
  }

  //chức năng bật tắt repeat
  onRepeat() {
    this.isRepeat = !this.isRepeat;
  }

  onMute() {
    if (this.audioObj.volume > 0) {
      this.volume = 0;
      this.audioObj.volume = 0;
    } else {
      this.volume = 1;
      this.audioObj.volume = 1;
    }
  }

  // play nhạc
  play() {
    this.isPlaying = true;
    this.audioObj.play();

    this.songService.read(this.getCurrentSong()._id).subscribe((data) => {
      let newView = data.view;
      newView++;
      console.log(newView);
      const newData = {
        category: `${data.category._id}`,
        name: `${data.name}`,
        image: `${data.image}`,
        singer: `${data.singer}`,
        url: `${data.url}`,
        view: `${newView}`,
      };
      this.songService
        .update(this.getCurrentSong()._id, newData)
        .subscribe((data) => {
          console.log("OK");
        });
    });

    (
      document.querySelector('#song_cd') as HTMLElement
    ).style.animationPlayState = 'running';
  }

  //pause nhạc
  pause() {
    this.isPlaying = false;
    this.audioObj.pause();
    (
      document.querySelector('#song_cd') as HTMLElement
    ).style.animationPlayState = 'paused';
  }

  //next bài hát
  next() {
    if (this.isRandom) {
      this.randomSong();
    } else {
      this.currentIndex++;
      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
      this.isPlaying = true;
    }
    this.play();
  }

  previous() {
    if (this.isRandom) {
      this.randomSong();
    } else {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
      this.isPlaying = false;
    }
    this.play();
  }

  randomSong() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  }
  seeking() {
    this.audioObj.ontimeupdate = () => {
      if (this.audioObj.duration) {
        this.song_duration = Math.ceil(this.audioObj.duration);
        this.duration(this.audioObj.duration);
        this.countTime(this.audioObj.currentTime);
        this.progressPercent = Math.floor(
          (this.audioObj.currentTime / this.audioObj.duration) * 100
        );
      }
    };
  }
  changeProgress(event: any) {
    const seekTime = (this.audioObj.duration / 100) * event.target.value;
    this.audioObj.currentTime = seekTime;
  }

  changeVolume(event: any) {
    this.volume = event.target.value;
    console.log(this.volume);
    this.audioObj.volume = this.volume;
  }
  ended() {
    this.audioObj.onended = () => {
      if (this.isRepeat) {
        this.play();
      } else {
        this.next();
      }
    };
  }

  duration(duration: number) {
    const minute = Math.floor(duration / 60);
    const second = Math.ceil(duration % 60);
    this.song_durationString = `0${minute}:${second}`;
  }

  countTime(time: number) {
    const minute = Math.floor(time / 60);
    const second = Math.ceil(time % 60);
    this.song_currentTimeString = `0${minute}:${second}`;
  }

  deletePlayList() {
    this.songs.splice(1, this.songs.length - 1);
    localStorage.removeItem('playList');
    localStorage.setItem('playList', JSON.stringify(this.songs));
    location.reload();
  }
}
