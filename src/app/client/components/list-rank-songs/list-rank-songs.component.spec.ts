import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRankSongsComponent } from './list-rank-songs.component';

describe('ListRankSongsComponent', () => {
  let component: ListRankSongsComponent;
  let fixture: ComponentFixture<ListRankSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRankSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRankSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
