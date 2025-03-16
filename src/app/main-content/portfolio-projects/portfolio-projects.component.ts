import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  Projects = [
      {
        "name": "Join",
        "description": "Ein Projekt, das ich entwickelt habe, um Aufgabenverwaltung zu erleichtern.",
        "languages": ["JavaScript", "TypeScript", "Angular", "HTML", "CSS"]
      },
      {
        "name": "TaskMaster",
        "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
        "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"]
      },
      {
        "name": "Engeenier",
        "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
        "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"]
      },
      {
        "name": "Data-Scients",
        "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
        "languages": ["Python", "Django", "JavaScript", "Vue.js", "PostgreSQL"]
      }
  ]
  
  
}
