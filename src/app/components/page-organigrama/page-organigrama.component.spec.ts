import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrganigramaComponent } from './page-organigrama.component';

describe('PageOrganigramaComponent', () => {
  let component: PageOrganigramaComponent;
  let fixture: ComponentFixture<PageOrganigramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOrganigramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
