import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { DataService } from '../../data.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [NgStyle, CommonModule, CommentSectionComponent, AnimateOnScrollModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  constructor(private dataService: DataService) {}
  daten: any;

  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  };


}
