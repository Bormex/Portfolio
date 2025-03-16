import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  
    Logos = [
      { "name": "HTML" }, 
      { "name": "CSS" }, 
      { "name": "JavaScript" },
      { "name": "TypeScript" }, 
      { "name": "Angular" },
      { "name": "Firebase" }, 
      { "name": "Git" }, 
      { "name": "Rest Api" }, 
      { "name": "Scrum" }, 
      { "name": "Material Design" }, 
      { "name": "Continually Learning" }, 
    ]
  
}
