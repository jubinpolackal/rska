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

  onModifyAlbum($event, index) {
    $event.stopPropagation();
    const album = this.albums[index];
    album.isEditing = true;
    console.log('Modifying album' + album.name);
  }
  onDeleteAlbum($event, index) {
    $event.stopPropagation();
    const album = this.albums[index];
    console.log('Deleting album' + album.name);
  }

  onEditAlbum($event, title, descriptionText, index) {
    const album = this.albums[index];
    this.apiService.updateAlbum(album).subscribe(resp => {
      if (resp['status'] && resp['status'] === 200) {
        console.log(resp);
        console.log(resp['status']);
        console.log(resp['album']);
        const modifiedAlbumObj = resp['album'];
        const modifiedAlbum = new Album(modifiedAlbumObj['id'],
                                      modifiedAlbumObj['name'],
                                      modifiedAlbumObj['description'],
                                      modifiedAlbumObj['thumbnailId']);
        this.albums[index] = modifiedAlbum;
      } else {
        console.log('Update album error');
      }
    });
  }
}
