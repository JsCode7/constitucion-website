import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-carousel-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-carousel-list.component.html',
  styleUrl: './blog-carousel-list.component.css'
})
export class BlogCarouselListComponent {
  blogPosts: any[] = [];
  currentSlide = 0;
  postsPerSlide = 2; 
  totalSlides: number = 0;
  autoSlideInterval: any; 

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe((data: any[]) => {
      this.blogPosts = data.slice(0, 10); // Mostramos solo las primeras 10 noticias
      this.totalSlides = Math.ceil(this.blogPosts.length / this.postsPerSlide); // Calculamos el total de slides

      // Inicia el carrusel automático
      this.startAutoSlide();
    });
  }

  // Avanzar al siguiente slide
  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Reinicia al primer slide
    }
  }

  // Retroceder al slide anterior
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1; // Vuelve al último slide
    }
  }

  // Ir a un slide específico
  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // Inicia el temporizador para el carrusel automático
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(); // Avanza al siguiente slide cada 4 segundos
    }, 3000);
  }

  // Detiene el temporizador cuando el componente se destruye
  ngOnDestroy() {
    clearInterval(this.autoSlideInterval); // Limpia el temporizador
  }
}
