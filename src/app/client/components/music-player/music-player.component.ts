import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  @Input() songChildren1: any;
  @Input() playList: any;

  isPlaying = false;
  checkSpin = false;
  isRandom = false;
  isRepeat = false;
  progressPercent: number = 0;
  volume: number = 0.8;
  song_duration: number = 0;
  song_durationString: string = '';
  song_currentTimeString: string = '00:00';

  audioObj = new Audio();
  // song_name = document.querySelector('#song_name');
  // song_singer = document.querySelector('#song_singer');
  // song_cd = document.querySelector('#song_cd') as HTMLElement;
  // playBtn = document.querySelector('#play') as HTMLElement;
  // pauseBtn = document.querySelector('#pause') as HTMLElement;
  // progress = document.querySelector('#progress') as HTMLInputElement;

  currentIndex = 0;
  songs = [
    {
      id: 0,
      genre: 1,
      url: '../assets/Thức Giấc - Blue.mp3',
      name: 'Thức giấc - Blue',
      singer: 'Dalab',
      img: 'https://avatar-ex-swe.nixcdn.com/song/share/2021/07/14/f/9/f/e/1626231011678.jpg',
      view: 120,
    },
  ];


  // lấy thông tin bài hát hiện tại
  getCurrentSong() {
    return this.songs[this.currentIndex];
  }

  //tải thông tin bài hát hiện tại
  loadCurrentSong() {
    // document.querySelector('#song_name')!.textContent = this.getCurrentSong().name;
    // document.querySelector('#song_singer')!.textContent = this.getCurrentSong().singer;
    // document.querySelector('#song_cd')!.setAttribute('src', `${this.getCurrentSong().img}`);
    this.audioObj.src = this.getCurrentSong().url;
    this.audioObj.load();
  }

  start() {
    //tải thông tin bài hát đầu tiên khi chạy web
    this.loadCurrentSong();
    this.seeking();
    this.ended();
  }

  constructor() {}

  ngOnInit(): void {
    this.start();
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
    // this.checkSpin = true;
    this.audioObj.play();
    (
      document.querySelector('#song_cd') as HTMLElement
    ).style.animationPlayState = 'running';
  }

  //pause nhạc
  pause() {
    this.isPlaying = false;
    // this.checkSpin = false;
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
}

// pause() {
//   console.log('click pause');
//   this.audioObj.pause();
// }
// stop() {
//   console.log('click stop');
//   this.audioObj.pause();
//   this.audioObj.currentTime = 0;
// }
// openFile(url: any) {
//   this.audioObj.src = url;
//   this.audioObj.load();
//   this.audioObj.play();
//   console.log(url);
// }
