import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  Input
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true // ✅ standalone directive
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  @Input() animationClass = 'fade-in-up'; // default animation
  @Input() animationDuration = '0.8s';
  @Input() animationDelay = '0s';
  @Input() once = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.applyAnimation();
            if (this.once) {
              this.observer?.unobserve(this.el.nativeElement);
            }
          } else if (!this.once) {
            this.resetAnimation();
          }
        });
      }, { threshold: 0.1 });

      this.observer.observe(this.el.nativeElement);
    }
  }

  private applyAnimation(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'animation', `${this.animationClass} ${this.animationDuration} ease-out ${this.animationDelay} forwards`);
  }

  private resetAnimation(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.removeStyle(this.el.nativeElement, 'animation');
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
