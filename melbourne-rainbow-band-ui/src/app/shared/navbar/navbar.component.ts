import { AfterViewInit, Component, HostListener } from '@angular/core';
import gsap from 'gsap';

@Component({
  standalone:true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  ngAfterViewInit(): void {
    gsap.from(".nav-link", {
      y: -50,          // clearly drop from above
      opacity: 0,      // initial invisible state
      duration: 0.8,
      stagger: 0.1,    // sequential animation clearly
      ease: "bounce.out" // bounce effect clearly
    });
  }
}