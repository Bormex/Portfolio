import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { DataService } from '../../data.service';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [NgStyle, CommonModule, CommentSectionComponent],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
}
