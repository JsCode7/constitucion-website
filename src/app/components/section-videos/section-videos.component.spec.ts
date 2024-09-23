import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideosComponent } from './section-videos.component';

describe('SectionVideosComponent', () => {
  let component: SectionVideosComponent;
  let fixture: ComponentFixture<SectionVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
