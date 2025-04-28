import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  burgerOpen: boolean = false;
}
