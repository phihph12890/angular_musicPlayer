import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CategoryManagerComponent } from './components/category-manager/category-manager.component';
import { SongManagerComponent } from './components/song-manager/song-manager.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CateListComponent } from './components/cate-list/cate-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
    children: [
      { 
        path: '',
        component: HomeComponent
      },
      { 
        path: 'category-manager',
        component: CategoryManagerComponent,
      },
      { 
        path: 'category-add',
        component: CategoryAddComponent,
      },
      {
        path: 'update',
        component: CategoryEditComponent,
        children: [
          { 
            path: ':id',
            component: CategoryEditComponent,
          }
        ]
      },
      { 
        path: 'song-manager',
        component: SongManagerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
