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

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MessageComponent,
    DashComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    NComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
