import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import {SHUser, ShUtils} from '@sh/base';

export abstract class SHAuthenticationBaseService {

  private host = environment.apiUrl;
  private token?: string;
  private loggedInUsername?: string;
  private jwtHelper = new JwtHelperService()

  constructor(private http: HttpClient) { }

  public login(user: SHUser): Observable<HttpResponse<SHUser>> {
    return this.http.post<SHUser>(`${this.host}/user/login`, user, { observe: 'response' });
  }

  public register(user: SHUser): Observable<SHUser> {
    return this.http.post<SHUser>(`${this.host}/register`, user);
  }

  public logOut(): void {
    this.token = undefined;
    this.loggedInUsername = undefined;
    localStorage.removeItem('user');
    // localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('users');

  }

  public saveToken(token: string): void {
    this.token = token;
    this.loggedInUsername = undefined;
    // localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
  }

  public addSHUserToLocalStorage(user: SHUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getSHUserFromLocalStorage(): SHUser | undefined {
    return !ShUtils.isEmpty(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) :  undefined;
  }

  public loadToken(): void {
    // this.token = localStorage.getItem('token');
    if(!ShUtils.isEmpty(sessionStorage.getItem('token')))  this.token = sessionStorage.getItem('token')!;
  }

  public getToken(): string | undefined {
    return this.token;
  }

  public isLoggedIn(): boolean {
    this.loadToken()
    if (!ShUtils.isEmpty(this.token)) {
      if (!ShUtils.isEmpty(this.jwtHelper.decodeToken(this.token!).sub)) {
        if (!this.jwtHelper.isTokenExpired(this.token!)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token!)!;
          return true;
        }
      }
    }
      this.logOut();
      return false;
  }
}
