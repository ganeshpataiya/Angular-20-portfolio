import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
// import { ScrollAnimateDirective } from './scroll-animate.directive';

// import { About } from './pages/about/about';
// import { Experience } from './pages/experience/experience';
// import { Project } from './pages/project/project';



@NgModule({
  // declarations: [ScrollAnimateDirective],
  // exports: [ScrollAnimateDirective],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }