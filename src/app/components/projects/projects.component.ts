import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

     projects = [
   
    {
      title: 'Resgistration Form',
      description: " Delivered a responsive web interface to manage user data (Create, Read, Update, Delete) with real-time API integration, improving understanding of full-stack development and asynchronous communication. Developed dynamic UI components using Angular's reactive forms. Strengthened practical skills in API integration with HttpClient, Observables, and component-based architecture.",
       
    }, 

    {
      title: 'Responsive E_Commerce Website',
      description: ' Created a responsive e-commerce website using  HTML, CSS, and JavaScript, focusing on interactive UI,responsiveness, and basic client-side functionality.',
       demo: 'https://sakthi2434.github.io/Project/index.html'
    },

    {
      title: 'Portfolio Website',
      description: 'You are actually looking at it! A fully custom-built responsive portfolio website made with Angular and Bootstrap to showcase my projects, skills, and contact info.Angular and Bootstrap to showcase my projects, skills, and contact info.',
      
    },];
    
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve if you want it only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animatedItems.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }
}
