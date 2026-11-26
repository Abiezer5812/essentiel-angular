import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { NgIf, NgStyle, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, NgIf, NgStyle, NgClass, UpperCasePipe, RouterLink, DetailsComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() idProduit: number;
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input () idArticle: number;
  @Input() dispo: boolean;

  jaime: boolean = true;
  comment: string = "Ceci est un commentaire";

  @Output() info = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  get nbLike(): number {
    return this.dataService.getLikes(this.titreArticle);
  }

  onLike() {
    if (this.jaime) {
      this.dataService.ajouterLike(this.titreArticle);
      this.jaime = false;
    } else {
      this.dataService.retirerLike(this.titreArticle);
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor() {
    return this.dispo ? 'green' : 'red';
  }
}