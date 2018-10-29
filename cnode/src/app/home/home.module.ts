import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { NavComponent } from './component/nav.component';
import { HomeComponent } from './home.component';
import { ListComponent } from './component/list/list.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        NavComponent,
        HomeComponent,
        ListComponent
    ],
})
export class HomeModule { }