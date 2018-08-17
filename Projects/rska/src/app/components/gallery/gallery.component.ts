import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albums: Album[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllAlbums().subscribe(res => {
      this.albums = res;
      console.log(this.albums);
    });
  }

}
