import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbummanagerComponent } from './albummanager.component';

describe('AlbummanagerComponent', () => {
  let component: AlbummanagerComponent;
  let fixture: ComponentFixture<AlbummanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbummanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbummanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
