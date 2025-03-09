import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContentComponent, ImprintComponent, FooterComponent, NavBarComponent, PrivacyPolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
