import { Album } from './../../model/album';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallerymanager',
  templateUrl: './gallerymanager.component.html',
  styleUrls: ['./gallerymanager.component.scss']
})
export class GallerymanagerComponent implements OnInit {

  albums: Album[];
  albumName: string;
  albumDescription: string;
  selectedAlbum: Album;
  modifiedAlbumName: string;
  modifiedAlbumDescription: string;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.apiService.getAllAlbums().subscribe(res => {
      this.albums = res;
      console.log(this.albums);
    });
  }

  onModifyAlbum($event, index) {
    $event.stopPropagation();
    const album = this.albums[index];
    album.isEditing = true;
    this.selectedAlbum = album;
    this.modifiedAlbumName = album.name;
    this.modifiedAlbumDescription = album.description;
    console.log('Modifying album' + album.name);
  }

  onDeleteAlbum($event, index) {
    $event.stopPropagation();
    const album = this.albums[index];
    console.log('Deleting album' + album.name);
    this.apiService.deleteAlbum(album.id).subscribe(resp => {
      console.log(resp);
      if (resp['status'] && resp['status'] === 200) {
        console.log('Deleted album successfully');
      } else {
        console.log('Error deleting album');
      }
    });
  }

  onEditAlbum($event, index) {
    $event.stopPropagation();
    const album = this.albums[index] as Album;
    album.name = this.modifiedAlbumName;
    album.description = this.modifiedAlbumDescription;
    if (album.id !== -1) {
      console.log('Going to edit ...');
      this.apiService.updateAlbum(this.selectedAlbum).subscribe(resp => {
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
    } else {
      console.log('Creating new album ...');
      this.apiService.createAlbum(this.selectedAlbum).subscribe(resp => {
        console.log(resp);
        if (resp['status'] && resp['status'] === 200) {

        } else {

        }
      });
    }
  }

  onCancel($event, index) {
    $event.stopPropagation();
    const album = this.albums[index] as Album;
    album.isEditing = false;
  }

  onViewAlbum($event, i) {
    $event.stopPropagation();
    this.router.navigate(['albummanager']);
  }

  addNewAlbum($event) {
    $event.stopPropagation();
    let album = new Album(-1, '', '', -1);
    album.isEditing = true;
    this.albums.splice(0, 0, album);
  }
}
