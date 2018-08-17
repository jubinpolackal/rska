import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Album } from '../model/album';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const publicURL = '/public';
const protectedURL = '/protected';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  private getPublic(method) {
    const url = publicURL + method;
    return this.http.get(url, httpOptions);
  }

  private postPublic(body, method): Observable<any> {
    const url = publicURL + method;
    return this.http.post(url, body, httpOptions);
  }

  private getProtected(body, method) {

  }

  private postProtected(body, method) {

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
    // this.getPublic('/getalbums').subscribe(res => {
    //   console.log(res['albums']);

    // });
    return this.getPublic('/getalbums').map(res => res['albums'] as Album[]);
  }
}
