import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarouselListComponent } from './blog-carousel-list.component';

describe('BlogCarouselListComponent', () => {
  let component: BlogCarouselListComponent;
  let fixture: ComponentFixture<BlogCarouselListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCarouselListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCarouselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
