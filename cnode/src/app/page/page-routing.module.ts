
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', component: PageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class PageRoutingModule { }