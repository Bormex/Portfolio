import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from "./comment-section/comment-section.component";

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [NgStyle, CommonModule, CommentSectionComponent],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  Projects = [
    {
      "name": "TaskMaster",
      "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
      "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"],
      "image": "./../../../assets/img/notebook_Pokedex.png"
    },
    {
      "name": "Join",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "languages": ["JavaScript", "TypeScript", "Angular", "HTML", "CSS"],
      "image": "./../../../assets/img/notebook_Join.png"
    },
    {
      "name": "Engeenier",
      "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
      "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"],
      "image": "./../../../assets/img/notebook_Pollo_loco.png"
    },
    {
      "name": "Data-Scients",
      "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
      "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"],
      "image": "./../../../assets/img/notebook_Dabubble.png"
    }
  ]
  
  
}
