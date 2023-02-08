import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { BreakingNewsComponent } from './Components/breaking-news/breaking-news.component';
import { TodayNewsComponent } from './Components/today-news/today-news.component';
import { TechNewsComponent } from './Components/tech-news/tech-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BreakingNewsComponent,
    TodayNewsComponent,
    TechNewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
