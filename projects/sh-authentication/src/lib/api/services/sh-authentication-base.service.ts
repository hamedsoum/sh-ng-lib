import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import {SHAuthenticationEndpoint, SHAuthenticationRoute} from '../domain/sh-authentication';
import {SHUser, ShUtils, SHAuthenticationUsernamePasswordRequest} from '@sh/base';
import {Router} from '@angular/router';

export abstract class SHAuthenticationBaseService {

  private token?: string;
  private loggedInUsername?: string;
  private jwtHelper = new JwtHelperService()

  public abstract getEndpoint(): SHAuthenticationEndpoint;
  public abstract getRoute(): SHAuthenticationRoute;

  constructor(private http: HttpClient, protected router: Router) { }

  public login(request: SHAuthenticationUsernamePasswordRequest): Observable<HttpResponse<SHUser>> {
    return this.http.post<SHUser>(this.getEndpoint().login, request, { observe: 'response' });
  }

  public register(user: SHUser): Observable<SHUser> {
    return this.http.post<SHUser>(this.getEndpoint().register, user);
  }

  public logOut(): void {
    this.token = undefined;
    this.loggedInUsername = undefined;
    localStorage.removeItem('user');
    // localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('users');
    this.router.navigate([this.getRoute().login]).then();

  }

  public saveToken(token: string): void {
    this.token = token;
    this.loggedInUsername = undefined;
    // localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
  }

  public addUserToLocalStorage(user: SHUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalStorage(): SHUser | undefined {
    return !ShUtils.isEmpty(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) :  undefined;
  }

  public loadToken(): void {
    // this.token = localStorage.getItem('token');
    if(!ShUtils.isEmpty(sessionStorage.getItem('token')))  this.token = sessionStorage.getItem('token')!;
  }

  public getToken(): string | undefined {
    return this.token;
  }

  public isAuthenticate(): boolean {
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
