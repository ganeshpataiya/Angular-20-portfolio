import { CommonModule } from '@angular/common';
import {  Component, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bgsetting',
  imports: [CommonModule],
  templateUrl: './bgsetting.html',
  styleUrl: './bgsetting.scss'
})
export class Bgsetting {
    constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


  setBackground(type: 'green' | 'red' | 'blue' | 'orange') {
    if (!isPlatformBrowser(this.platformId)) return; // SSR-safe
    const body = this.document.body;

    // remove previous color classes
    ['green','red','blue','orange'].forEach(c =>
      this.renderer.removeClass(body, `color-${c}`)
    );

    // add new one
    this.renderer.addClass(body, `color-${type}`);
  }


  ngOnInit() {
    this.showDiv('video1'); // ✅ Default visible div
  }

  showDiv(videoId: string) {
    const videos = ['video1', 'video2', 'video3'];
    videos.forEach(id => {
      const videoElement = document.getElementById(id);
      if (videoElement) {
        this.renderer.setStyle(videoElement, 'display', id === videoId ? 'block' : 'none');
      }
    });
  }


}
