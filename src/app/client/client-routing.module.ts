import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent,
    children: [
      {
        path: '', 
        component: HomePageComponent
      }
    ]
  },
  {
    path: 'category', 
    component: ClientComponent,
    children: [
      {
        path: ':id', 
        component: CategoryPageComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
