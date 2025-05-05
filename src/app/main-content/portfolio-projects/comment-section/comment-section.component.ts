import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  selectedComment:any = 0;

  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }

  /**
  * Changes the currently selected comment index with wrap-around logic.
  * @param index - The target comment index.
  */
  changeComment(index: number) {
    if (index == this.daten.Comments.length) {
      this.selectedComment = 0;
    } else {
      this.selectedComment = index;
    }
    if (index < 0) this.selectedComment = (this.daten.Comments.length - 1);
  }
}
