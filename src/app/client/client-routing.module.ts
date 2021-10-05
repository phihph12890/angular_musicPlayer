import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ListRankSongsComponent } from './components/list-rank-songs/list-rank-songs.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent,
    children: [
      {
        path: '', 
        component: ListSongsComponent
      }
    ]
  },
  {
    path: 'genre', 
    component: ClientComponent,
    children: [
      {
        path: ':id', 
        component: ListSongsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
