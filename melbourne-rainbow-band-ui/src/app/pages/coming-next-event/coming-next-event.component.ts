import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ComingNextEventService } from '../../core/coming-next-event.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-coming-next-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-next-event.component.html',
  styleUrls: ['./coming-next-event.component.css'],
})
export class ComingNextEventComponent implements AfterViewInit {
  private eventService = inject(ComingNextEventService);

  @ViewChild('poster') poster!: ElementRef;
  @ViewChild('stepsContainer') stepsContainer!: ElementRef;

  posterUrl = '';
  steps: { title: string; content: string; visible: boolean }[] = [];

  ngAfterViewInit() {
    this.eventService.fetchEventData().subscribe(({ posterUrl, steps }) => {
      this.posterUrl = posterUrl;
      this.steps = steps;

      setTimeout(() => {
        this.animatePoster();
        this.animateSteps();
      }, 0);
    });
  }

  private animatePoster() {
    if (!this.poster?.nativeElement) return;
    gsap.from(this.poster.nativeElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.poster.nativeElement,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      }
    });
  }

  private animateSteps() {

    
    if (!this.stepsContainer?.nativeElement) return;

    const stepElements = this.stepsContainer.nativeElement.querySelectorAll('.step');
    stepElements.forEach((step: HTMLElement) => {
      gsap.to(step, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        }
      });
    });
  }
}
