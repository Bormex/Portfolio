import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
}
