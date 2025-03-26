import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  selectedComment:any = 0;

  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }

  changeComment(index: number) {
    if (index == this.daten.Comments.length) {
      this.selectedComment = 0;
    } else {
      this.selectedComment = index;
    }
    
    if (index < 0) this.selectedComment = (this.daten.Comments.length - 1);
  }
}
