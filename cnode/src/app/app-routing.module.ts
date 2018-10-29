import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { DashComponent } from './hero/dash.component';

import { HomeComponent } from './home/home.component'
import { ListComponent } from './home/component/list/list.component';
const routes: Routes = [
  // { path: '', redirectTo: '/dash', pathMatch: 'full' },
  // { path: 'dash', component: DashComponent },
  // { path: 'detail/:id', component: HeroDetailComponent }
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'topic/:id', component: ListComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
