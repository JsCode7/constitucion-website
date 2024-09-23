import { Component } from '@angular/core';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { SectionIconsComponent } from "../section-icons/section-icons.component";
import { SectionTwoBoxesComponent } from "../section-two-boxes/section-two-boxes.component";
import { SectionLinksComponent } from "../section-links/section-links.component";
import { BlogCarouselListComponent } from "../blog-carousel-list/blog-carousel-list.component";
import { SectionContactComponent } from "../section-contact/section-contact.component";
import { VideoSectionComponent } from "../section-videos/section-videos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, SectionIconsComponent, SectionTwoBoxesComponent, SectionLinksComponent, BlogCarouselListComponent, SectionContactComponent, VideoSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
