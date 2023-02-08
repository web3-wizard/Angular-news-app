import { TechNewsComponent } from './Components/tech-news/tech-news.component';
import { TodayNewsComponent } from './Components/today-news/today-news.component';
import { BreakingNewsComponent } from './Components/breaking-news/breaking-news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BreakingNewsComponent },
  { path: 'news', component: TodayNewsComponent },
  { path: 'tech-news', component: TechNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
