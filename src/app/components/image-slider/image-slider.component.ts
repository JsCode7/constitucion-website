import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  slides = [
    {
      image: '/assets/img/slider-1.jpg',
      title: 'Celebra las fiestas patrias en Constitucion',
      subtitle: 'Conoce nuestras ubicaciones',
      cta: 'Leer más',
      link: '/blog'
    },
    {
      image: '/assets/img/slider-2.jpg',
      title: 'Postula a más beneficios',
      subtitle: 'Creados especialmente para ti',
      cta: 'Ver más',
      link: '/blog'
    },
    {
      image: '/assets/img/slider-3.jpg',
      title: '¿Necesitas patente municipal?',
      subtitle: 'Nosotros te ayudamos',
      cta: 'Solicitar',
      link: 'https://sertex1.stonline.cl/Constitucion/patcom/asp/inicio.asp'
    }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
