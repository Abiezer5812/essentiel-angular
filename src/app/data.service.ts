import { Injectable } from '@angular/core';

export interface Article {
  titreArticle: string;
  prixArticle: number;
  description: string;
  urlImg: string;
  textAltImg: string;
  dispo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private liste: Article[] = [
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
      dispo: true
    }
  ];

  private likes: { [titre: string]: number } = {};

  getArticles(): Article[] {
    return this.liste;
  }

  getLikes(titre: string): number {
    return this.likes[titre] ?? 0;
  }

  ajouterLike(titre: string) {
    this.likes[titre] = this.getLikes(titre) + 1;
  }

  retirerLike(titre: string) {
    this.likes[titre] = Math.max(0, this.getLikes(titre) - 1);
  }
}