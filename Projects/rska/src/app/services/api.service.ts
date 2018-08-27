import { Album } from './../model/album';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { UtilityService } from './utility.service';

const publicURL = '/public';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient,
              private utilityService: UtilityService) { }

  /* Unprotected public api */
  private getPublic(method) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = publicURL + method;
    return this.http.get(url, httpOptions);
  }

  private postPublic(body, method): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = publicURL + method;
    return this.http.post(url, body, httpOptions);
  }

  /* API's protected with web token */
  private getProtected(body, method) {

  }

  private postProtected(body, method) {
    const url = method;
    const token = this.utilityService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
                                'Authorization': token}),
    };
    return this.http.post(url, body, httpOptions);
  }

  public postContactUs(name, phone, email, message) {
    const body = {
      'phone': phone,
      'email': email,
      'name': name,
      'message': message
    };
    return this.postPublic(body, '/contact-email');
  }

  public postLogin(userName, password) {
    const body = {
      'userName': userName,
      'password': password
    };
    return this.postPublic(body, '/login');
  }

  public getAllAlbums() {
    return this.getPublic('/getalbums').map(res => res['albums'] as Album[]);
  }

  public updateAlbum(album) {
    const body = JSON.stringify(album);
    console.log('Update body content ...');
    console.log(body);
    return this.postProtected(body, '/album/update');
  }

  public deleteAlbum(id) {
    const body = {'id': id};
    return this.postProtected(body, '/album/delete');
  }

  public createAlbum(album: Album) {
    console.log(album);
    const body = {
      'name': album.name,
      'description': album.description
    };
    console.log('body ...');
    console.log(body);
    return this.postProtected(body, '/album/create');
  }

  public uploadPhoto(albumId, fileName, fileData) {
    const body = {
      imagedata: fileData,
      filename: fileName,
      albumid: albumId
    };
    return this.postProtected(body, '/album/upload');
  }

  public getPhotos(albumId) {
    const method = '/getphotos/' + albumId;

    return this.getPublic(method);
  }
}
