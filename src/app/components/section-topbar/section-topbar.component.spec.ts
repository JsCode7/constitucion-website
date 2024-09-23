import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTopbarComponent } from './section-topbar.component';

describe('SectionTopbarComponent', () => {
  let component: SectionTopbarComponent;
  let fixture: ComponentFixture<SectionTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
