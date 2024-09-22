import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';

@Component({
  selector: 'app-page-organigrama',
  standalone: true,
  imports: [CommonModule, PinchZoomModule],
  templateUrl: './page-organigrama.component.html',
  styleUrls: ['./page-organigrama.component.css'],
  schemas: []
})
export class PageOrganigramaComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        const pinchZoomElement = document.querySelector('.ngx-pinch-zoom');
        if (pinchZoomElement) {
          const rect = pinchZoomElement.getBoundingClientRect();
          console.log('Tamaño y posición del contenedor:', rect);
        }
      }, 0);
    }
  }
}
