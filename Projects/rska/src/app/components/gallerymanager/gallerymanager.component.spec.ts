import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerymanagerComponent } from './gallerymanager.component';

describe('GallerymanagerComponent', () => {
  let component: GallerymanagerComponent;
  let fixture: ComponentFixture<GallerymanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerymanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
