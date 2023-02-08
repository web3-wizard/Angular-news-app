import { NewsService } from './../../Service/News/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/types';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css'],
})
export class BreakingNewsComponent implements OnInit {
  news: News[] = [];

  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.service.getBreakingNews().subscribe((res: any) => {
      this.news = res.news;
      console.log(res);
    });
  }
}
