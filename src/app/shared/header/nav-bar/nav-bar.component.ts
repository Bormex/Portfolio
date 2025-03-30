import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { MainContentComponent } from '../../../main-content/main-content.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../data.service';
import { PortfolioProjectsComponent } from '../../../main-content/portfolio-projects/portfolio-projects.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgStyle, MainContentComponent, TranslateModule, PortfolioProjectsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  en!: string;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  landingpage:boolean = true;

  ngOnInit() {
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
  }


}
