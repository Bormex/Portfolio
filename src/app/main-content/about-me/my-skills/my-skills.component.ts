import { Component } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private dataService: DataService) {}
  daten: any;

  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
  
}
