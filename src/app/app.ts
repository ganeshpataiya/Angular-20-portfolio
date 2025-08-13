import { Component, OnInit } from '@angular/core';
// import {dataService} from './api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';
import { Resume } from './features/resume/resume';
import { Nav } from './layout/nav/nav';
import { MatIcon } from '@angular/material/icon';
import { Bgsetting } from "./layout/bgsetting/bgsetting";
// import { Hamburgemenu } from "./layout/hamburgemenu/hamburgemenu";
// import { Experience } from './features/experience/experience';
import { Profile } from './features/profile/profile';
// import { MatIcon } from '@angular/material/icon';
import { ScrollAnimateDirective } from './scroll-animate.directive';


@Component({
  selector: 'app-root',
  imports: [ScrollAnimateDirective, CommonModule, Home, About, Resume, Skills, Portfolio, Contact, Nav, MatIcon, Bgsetting, Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  // imports: [ScrollAnimateDirective], // ✅ import directly here

})
export class App {
  // protected title = 'angular-profile';
  isPopupOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true
  }
  closePopup() {
    this.isPopupOpen = false;
  }

}
