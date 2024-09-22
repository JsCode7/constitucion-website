import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  post: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.blogService.getBlogPostById(postId).subscribe((data: any) => {
      this.post = data;
    });
  }
}
