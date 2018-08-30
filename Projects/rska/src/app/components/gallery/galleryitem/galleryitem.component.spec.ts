import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryitemComponent } from './galleryitem.component';

describe('GalleryitemComponent', () => {
  let component: GalleryitemComponent;
  let fixture: ComponentFixture<GalleryitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
