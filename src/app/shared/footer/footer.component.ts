import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  
  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
}
