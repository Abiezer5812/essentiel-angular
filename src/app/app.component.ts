import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DataService, Article } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  menuOuvert = false;

  prix1: number = 15;
  prix2: number = 25;
  prix3: number = 40;

  message: string = "";
  liste: Article[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.liste = this.dataService.getArticles();
  }

  onAffiche(titre: string) {
    this.message = "Merci d'avoir voté pour l'article : " + titre;
  }
}