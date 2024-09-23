import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFarmaciaPopularComponent } from './page-farmacia-popular.component';

describe('PageFarmaciaPopularComponent', () => {
  let component: PageFarmaciaPopularComponent;
  let fixture: ComponentFixture<PageFarmaciaPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFarmaciaPopularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFarmaciaPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
