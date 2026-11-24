import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labonneaffaire';
  menuOuvert = false;

  prix1: number = 15;
  prix2: number = 25;
  prix3: number = 40;

  message: string = "";

  onAffiche(titre: string) {
    this.message = "Merci d'avoir voté pour l'article : " + titre;
  }

  liste = [
    {
      titreArticle: 'Vélo',
      prixArticle: 80,
      description: 'Un super vélo tout terrain',
      urlImg: 'assets/images/vélo.webp',
      textAltImg: 'Un vélo',
      dispo: false
    },
    {
      titreArticle: 'TV',
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: 'assets/images/tv.jpg',
      textAltImg: 'Une télévision',
      dispo: true
    },
    {
      titreArticle: 'Jouet',
      prixArticle: 15,
      description: 'Un jouet pour les enfants',
      urlImg: 'assets/images/jouet.webp',
      textAltImg: 'Un jouet',
      dispo:  true
    }
  ];

}