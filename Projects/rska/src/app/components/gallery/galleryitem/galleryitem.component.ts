import { Album } from './../../../model/album';
import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Photo } from '../../../model/photo';

@Component({
  selector: 'app-galleryitem',
  templateUrl: './galleryitem.component.html',
  styleUrls: ['./galleryitem.component.scss']
})
export class GalleryitemComponent implements OnInit {

  @Input() images: Photo[];
  @Input() album: Album;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    for (let i = 0; i < this.images.length; i++) {
      const imgObj = {
          small: this.images[i].photourl,
          medium: this.images[i].photourl,
          big: this.images[i].photourl
      };
      this.galleryImages.push(imgObj);
    }
  }

}
