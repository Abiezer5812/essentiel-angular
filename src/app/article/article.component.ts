import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgStyle, NgClass, UpperCasePipe  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, NgIf, NgStyle, NgClass, UpperCasePipe ],
  providers:[DataService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() titreArticle: string ;
  @Input() prixArticle: number = 0;
  @Input() description: string ;
  @Input() urlImg: string ;
  @Input() textAltImg: string ;
  @Input() dispo: boolean;
  Jaime: boolean = true

  nbLike: number = 0;
  comment: string = "Ceci est un commentaire";

  @Output() info = new EventEmitter<string>();

  onLike() {
    if (this.Jaime == true) {
    this.nbLike++;
    this.Jaime = false;
    } else {
      this.nbLike--;
      this.Jaime = true;
    }
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