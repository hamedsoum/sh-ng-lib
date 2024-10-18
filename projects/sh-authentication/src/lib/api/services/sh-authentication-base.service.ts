import {HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import {SHAuthenticationEndpoint, SHAuthenticationRoute} from '../domain/sh-authentication';
import {SHUser, SHUtils,SHttpClientService, SHAuthenticationUsernamePasswordRequest, XSAuthenticationPINCodeRequest} from '@sh/base';
import {Router} from '@angular/router';
import {XS_STORAGE_KEY_TOKEN, XS_STORAGE_KEY_USER} from '../constant/sh-authentication-constant';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class SHAuthenticationBaseService {

  private token?: string;
  private loggedInUsername?: string;
  private jwtHelper = new JwtHelperService

  public abstract getEndpoint(): SHAuthenticationEndpoint;
  public abstract getRoute(): SHAuthenticationRoute;

  constructor(protected http: SHttpClientService, protected router: Router) { }

  public login(request: SHAuthenticationUsernamePasswordRequest | XSAuthenticationPINCodeRequest): Observable<HttpResponse<SHUser>> {
    console.log(" ===| Login function call from authentication library service |===");
    return this.http.post<HttpResponse<SHUser>>(this.getEndpoint().login, request);
  }

  public register(user: SHUser): Observable<HttpResponse<SHUser>> {
    return this.http.post<HttpResponse<SHUser>>(this.getEndpoint().register, user);
  }

  public logOut(): void {
    this.token = undefined;
    this.loggedInUsername = undefined;
    localStorage.removeItem(XS_STORAGE_KEY_USER);
    // localStorage.removeItem('token');
    sessionStorage.removeItem(XS_STORAGE_KEY_TOKEN);
    localStorage.removeItem(XS_STORAGE_KEY_USER);
    this.router.navigate([this.getRoute().login]).then();

  }

  public saveToken(token: string): void {
    this.token = token;
    this.loggedInUsername = undefined;
    // localStorage.setItem('token', token);
    sessionStorage.setItem(XS_STORAGE_KEY_TOKEN, token);
  }

  public addUserToLocalStorage(user: SHUser): void {
    localStorage.setItem(XS_STORAGE_KEY_USER, JSON.stringify(user));
  }

  public getUserFromLocalStorage(): SHUser | undefined {
    return !SHUtils.isEmpty(localStorage.getItem(XS_STORAGE_KEY_USER)) ? JSON.parse(localStorage.getItem('user')!) :  undefined;
  }

  public loadToken(): void {
    // this.token = localStorage.getItem('token');
    if(!SHUtils.isEmpty(sessionStorage.getItem(XS_STORAGE_KEY_TOKEN)))  this.token = sessionStorage.getItem('token')!;
  }

  public getToken(): string | undefined {
    return this.token;
  }

  public isAuthenticate(): boolean {
    this.loadToken()
    if (!SHUtils.isEmpty(this.token)) {
      if (!SHUtils.isEmpty(this.jwtHelper.decodeToken(this.token!).sub)) {
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
