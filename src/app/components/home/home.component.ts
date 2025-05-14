import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('float', [
      transition('* => *', [
        animate('3s infinite', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-10px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
  
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  animationState = true; // triggers the animation

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      strings: ['Full Stack Developer',  'Backend Explorer'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    };


    new Typed(this.typedElement.nativeElement, options);
  }
}
