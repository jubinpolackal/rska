import { Injectable } from '@angular/core';

const tokenKey = 'AppToken';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public getToken(): string {
    const token = window.localStorage.getItem(tokenKey);
    return token;
  }

  public saveToken(token: string) {
    window.localStorage.setItem(tokenKey, token);
  }
}
