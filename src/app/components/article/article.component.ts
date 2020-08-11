import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public checked = false;
  constructor() { }

  ngOnInit(): void {
  }

  onPanelClick() {
    console.log('onPanelClick')
    this.checked = !this.checked;
  }

  onHelpClick(event: Event) {
    event.stopPropagation();
    console.log('onHelpClick')
  }

}
