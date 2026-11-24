import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() titreArticle: string = "";
  @Input() prixArticle: number = 0;
  @Input() description: string = "";
  @Input() urlImg: string = "";
  @Input() textAltImg: string = "";
  @Input() dispo: boolean = true;

  nbLike: number = 0;
  comment: string = "";

  @Output() info = new EventEmitter<string>();

  onLike() {
    this.nbLike++;
    this.info.emit(this.titreArticle);
  }
}