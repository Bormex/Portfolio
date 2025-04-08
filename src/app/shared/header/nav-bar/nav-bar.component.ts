import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { MainContentComponent } from '../../../main-content/main-content.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../data.service';
import { PortfolioProjectsComponent } from '../../../main-content/portfolio-projects/portfolio-projects.component';
import { BurgerMenuComponent } from "../../burger-menu/burger-menu.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgStyle, MainContentComponent, TranslateModule, PortfolioProjectsComponent, BurgerMenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  isActive: boolean | undefined;
  en!: string;
  landingpage:boolean = true;
  daten: any;

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
