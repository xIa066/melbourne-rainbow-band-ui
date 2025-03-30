import { AfterViewInit, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ComingNextEventComponent } from "../coming-next-event/coming-next-event.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage, NavbarComponent, ComingNextEventComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initParallax();
    
    gsap.to('.coming-next-indicator', {
      opacity: 1,
      y: 0,
      ease: 'elastic.out',
      scrollTrigger: {
        trigger: '.hero-section', // Use hero-section clearly as trigger
        start: 'bottom 90%',
        end: 'bottom 60%',
        scrub: true,
      }
    });
  }

  private initParallax(): void {
    gsap.to('.background-image', {
      y: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }
}
