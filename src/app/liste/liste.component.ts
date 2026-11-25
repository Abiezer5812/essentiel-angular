import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { DataService, Article } from '../data.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [NgFor, ArticleComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {
  liste: Article[] = [];
  message: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.liste = this.dataService.getArticles();
  }

  onAffiche(titre: string) {
    this.message = "Merci d'avoir voté pour l'article : " + titre;
  }
}