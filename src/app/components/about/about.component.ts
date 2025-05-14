import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  aboutVisible = 'hidden';

  constructor() {}

  ngOnInit(): void {}

 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.aboutSection.nativeElement;
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && this.aboutVisible === 'hidden') {
      setTimeout(() => {
        this.aboutVisible = 'visible';
      }, 0);
    }
  }
  
}
