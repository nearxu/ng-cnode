import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MessageComponent } from './message/message.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './hero/dash.component'
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NComponent } from './n/n.component';
import { HomeModule } from './home/home.module';

// import { ListComponent } from './home/component/list/list.component'
// import { NavComponent } from './home/component/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MessageComponent,
    DashComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    NComponent,
    // HomeComponent,
    // ListComponent,
    // NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
