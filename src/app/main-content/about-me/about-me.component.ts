import { Component } from '@angular/core';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MySkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
