import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoBoxesComponent } from './section-two-boxes.component';

describe('SectionTwoBoxesComponent', () => {
  let component: SectionTwoBoxesComponent;
  let fixture: ComponentFixture<SectionTwoBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTwoBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTwoBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
