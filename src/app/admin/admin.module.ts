import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SongManagerComponent } from './components/song-manager/song-manager.component';
import { SongAddComponent } from './components/song-add/song-add.component';
import { SongEditComponent } from './components/song-edit/song-edit.component';
import { CategoryManagerComponent } from './components/category-manager/category-manager.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { HomeComponent } from './components/home/home.component';
import { CateListComponent } from './components/cate-list/cate-list.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AdminComponent,
    SongManagerComponent,
    SongAddComponent,
    SongEditComponent,
    CategoryManagerComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    HomeComponent,
    CateListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
  ]
})
export class AdminModule { }
