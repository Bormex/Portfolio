import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  
  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
  
}
