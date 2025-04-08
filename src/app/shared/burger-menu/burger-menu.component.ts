import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  burgerOpen:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}
  
  isActive: boolean | undefined;
  en!: string;
  landingpage:boolean = true;
  daten: any;

  burgerMenu() {
    if (!this.burgerOpen) {
      this.burgerOpen = true;
    } else (
      this.burgerOpen = false
    )
  }

  ngOnInit() {
    this.daten = this.dataService.getJsonData();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl == '/privacyPolicy' || currentUrl == '/imprint') {
        this.landingpage = false;
      }
    });
  }
  
  changeLanguage(para:string) {
   this.dataService.getData(para);
   this.changeLanguageBtn(para);
  }

  changeLanguageBtn(para: string) {
    if (para == 'de') {
      this.isActive = true;
     } else {
      this.isActive = false;
     }
  }
}
