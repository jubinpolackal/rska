import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'app-gallerymanager',
  templateUrl: './gallerymanager.component.html',
  styleUrls: ['./gallerymanager.component.scss']
})
export class GallerymanagerComponent implements OnInit {

  albums: Album[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllAlbums().subscribe(res => {
      this.albums = res;
    });
  }

}
