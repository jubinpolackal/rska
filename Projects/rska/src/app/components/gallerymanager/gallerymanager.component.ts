import { Album } from './../../model/album';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-gallerymanager',
  templateUrl: './gallerymanager.component.html',
  styleUrls: ['./gallerymanager.component.scss']
})
export class GallerymanagerComponent implements OnInit {

  albums: Album[];
  photos: Photo[];
  albumName: string;
  albumDescription: string;
  selectedAlbum: Album;
  modifiedAlbumName: string;
  modifiedAlbumDescription: string;
  isPhotoManagerActive: boolean;
  uploadImage: any;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.apiService.getAllAlbums().subscribe(res => {
      this.albums = res;
      this.isPhotoManagerActive = false;
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
        this.albums.splice(index, 1);
      } else {
        console.log('Error deleting album');
        alert('Could not delete album. Please try again later.');
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
      this.apiService.createAlbum(this.albums[0]).subscribe(resp => {
        console.log(resp);
        if (resp['status'] && resp['status'] === 200) {
          const createdAlbum = resp['album'];
          createdAlbum.isEditing = false;
          this.albums.splice(0, 1, createdAlbum);
        } else {
          alert('Failed to creat album. Please try again later.');
        }
      });
    }
  }

  onCancel($event, index) {
    $event.stopPropagation();
    const album = this.albums[index] as Album;
    album.isEditing = false;
    if (album.id < 0) {
      this.albums.splice(0, 1);
    }
  }

  onViewAlbum($event, i) {
    $event.stopPropagation();
    this.selectedAlbum = this.albums[i];
    this.isPhotoManagerActive = true;
  }

  addNewAlbum($event) {
    $event.stopPropagation();
    const album = new Album(-1, '', '', -1);
    album.isEditing = true;
    this.albums.splice(0, 0, album);
  }

  addNewPhoto($event) {

  }

  backToAlbumManager() {
    this.isPhotoManagerActive = false;
  }

  selectImageListener($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.uploadImage = myReader.result;
      const fileName = file.name;
      const albumId = this.selectedAlbum.id;
      console.log(fileName);
      this.apiService.uploadPhoto(this.selectedAlbum.id, fileName, myReader.result).subscribe(resp => {
        if (resp['status'] && resp['status'] === 200) {
          console.log('Uploaded photo successfully ...');
        } else {
          console.log('Failed to upload photo ...');
          alert(resp['error']);
        }
      });
    };
    myReader.readAsDataURL(file);
  }
}
