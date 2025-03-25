import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
}
