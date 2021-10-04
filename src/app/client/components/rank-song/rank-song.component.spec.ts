import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankSongComponent } from './rank-song.component';

describe('RankSongComponent', () => {
  let component: RankSongComponent;
  let fixture: ComponentFixture<RankSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
