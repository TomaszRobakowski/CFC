import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleModel } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public checked = false;
  constructor() { }

  @Input() article: ArticleModel;
  @Output() onHelpEvent = new EventEmitter()
  @Output() onMouseOverEvent = new EventEmitter()
  @Output() onMouseOutEvent = new EventEmitter()

  ngOnInit(): void {
  }

  onPanelClick() {
    console.log('onPanelClick')
    this.checked = !this.checked;
  }

  onHelpClick(event: Event) {
    event.stopPropagation();
    this.onHelpEvent.emit()
  }

  onMouseOver() {
    this.onMouseOverEvent.emit();
  }

  onMouseOut(){
    this.onMouseOutEvent.emit();
  }
}
