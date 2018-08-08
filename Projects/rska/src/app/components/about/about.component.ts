import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // The time to show the next photo
  nextSlideInterval = 3000;
  // Looping or not
  private noLoopSlides = false;
  // Photos
  slides: Array<any> = [];

  constructor() {
    this.slides.push(
      {image: '../../../assets/images/about/1.jpg', text: 'Caption #1'},
      {image: '../../../assets/images/about/2.jpg', text: 'Caption #2'},
      {image: '../../../assets/images/about/3.jpg', text: 'Caption #3'}
  );
  }

  ngOnInit() {
  }

}
