import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../models/mock/article';
import { ArticleModel } from '../models/article';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})


export class MainFormComponent implements OnInit {
  public Articles: ArticleModel[];
  public Description: string;

  constructor() { }

  ngOnInit(): void {
    this.importArticles();
    this.Description = null;
  }

  importArticles() {
    this.Articles = ARTICLES
  }

  onShowDescription(article : ArticleModel) {
    this.Description = article.Description
  }
}
