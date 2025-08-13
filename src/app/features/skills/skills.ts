import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScrollAnimateDirective } from '../../scroll-animate.directive';

@Component({
  selector: 'app-skills',
  imports: [MatIcon, ScrollAnimateDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  // standalone: true,
})
export class Skills {

}
