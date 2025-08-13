import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScrollAnimateDirective } from '../../scroll-animate.directive';

@Component({
  selector: 'app-home',
  imports: [MatIcon, ScrollAnimateDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
