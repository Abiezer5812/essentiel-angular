import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
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
}