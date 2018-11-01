import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './detail/user-detail.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'topic/all', pathMatch: 'full' },
  { path: 'topic/:type', loadChildren: './page/page.module#PageModule' },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
