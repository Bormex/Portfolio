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
      { "name": "HTML", "image": "html" }, 
      { "name": "CSS", "image": "css" }, 
      { "name": "JavaScript", "image": "javascript" },
      { "name": "TypeScript", "image": "typescript" }, 
      { "name": "Angular", "image": "angular" },
      { "name": "Firebase", "image": "firebase" }, 
      { "name": "Git", "image": "git" }, 
      { "name": "Rest Api", "image": "api" }, 
      { "name": "Scrum", "image": "scrum" }, 
      { "name": "Material Design", "image": "material-desing" }, 
      { "name": "Continually Learning", "image": "continually-learning" }, 
    ]
  
}
