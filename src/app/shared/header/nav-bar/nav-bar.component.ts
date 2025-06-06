import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from '../../../data.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgStyle, AnimateOnScrollModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router, private dataService: DataService) {}

  isActive: boolean | undefined;
  en!: string;
  landingpage:boolean = true;
  daten: any;
  public burgerOpen: boolean = false;

  @Output() burgerOpenChange = new EventEmitter<boolean>();

  /**
  * Lifecycle hook that initializes component data from the data service.
  * Pulling the current and saved language from localstorage.
  * Remove the Navbar Scroll-links on imprint and privacy police.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
    this.changeLanguageBtn(this.getSavedLanguage());
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl == '/privacyPolicy' || currentUrl == '/imprint') {
        this.landingpage = false;
      } else {
        this.landingpage = true;
      }
    });
  }

  getSavedLanguage() {
    if (localStorage.getItem('Language') == undefined) {
      return 'en';
    } else {
      return localStorage.getItem('Language');
    }
  }

  /**
  * Switches language and updates the active language state.
  * Saves the language into the localstorage.
  * @param para - Language code (e.g., 'de', 'en').
  */
  changeLanguageBtn(para: string | null) {
    if (para == 'de') {
      this.isActive = true;
      this.dataService.getData(para);
      localStorage.setItem('Language', 'de')
     } else {
      this.isActive = false;
      this.dataService.getData(para);
      localStorage.setItem('Language', 'en')
     }
  }
  
  /**
  * Toggles the burger menu open/close state.
  */
  burgerMenu() {
    if (!this.burgerOpen && window.innerWidth <= 1000) {
      this.burgerOpen = true;
      this.burgerOpenChange.emit(this.burgerOpen);
    } else {
      this.burgerOpen = false;
      this.burgerOpenChange.emit(this.burgerOpen);
    }
  }
}
