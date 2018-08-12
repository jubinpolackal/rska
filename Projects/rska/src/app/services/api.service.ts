import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:3000';
const publicURL = '/public';
const protectedURL = '/protected';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  public getPublic(method) {

  }

  public postPublic(body, method): Observable<any> {
    const url = baseURL + publicURL + method;
    return this.http.post(url, body, httpOptions);
  }

  public getProtected(body, method) {

  }

  public postProtected(body, method) {

  }
}
