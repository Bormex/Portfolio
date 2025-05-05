import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private dataService: DataService) {}
  daten: any;

  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
  
}
