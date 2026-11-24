import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, NgIf, NgStyle],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() titreArticle: string = '';
  @Input() prixArticle: number = 0;
  @Input() description: string = '';
  @Input() urlImg: string = '';
  @Input() textAltImg: string = '';
  @Input() dispo: boolean = false;

  nbLike: number = 0;
  comment: string = "Ceci est un commentaire";

  @Output() info = new EventEmitter<string>();

  onLike() {
    this.nbLike++;
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return "green";
    } else {
      return "red";
    }
  }
}