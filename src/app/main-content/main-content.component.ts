import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PortfolioProjectsComponent } from "./portfolio-projects/portfolio-projects.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, LandingPageComponent, PortfolioProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
