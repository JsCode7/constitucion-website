import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogPosts: any[] = [];

  constructor(
    private blogService: BlogService,
    @Inject(PLATFORM_ID) private platformId: any  // Inyectar PLATFORM_ID para verificar si estamos en el navegador
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.blogService.getBlogPosts().subscribe((data: any[]) => {
        this.blogPosts = data;
      });
    }
  }
}
