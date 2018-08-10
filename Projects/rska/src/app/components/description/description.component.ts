import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  twitterOptions = {
    tweetLimit: 5
  };

  twitterData = {
    sourceType: 'url',
    url: 'https://twitter.com/twitterdev'
  };
  constructor() { }

  ngOnInit() {
  }

}
