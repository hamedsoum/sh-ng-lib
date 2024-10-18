import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SHAuthenticationEndpoint, SHAuthenticationRoute } from '../domain/sh-authentication';
import { SHUser, SHttpClientService, SHAuthenticationUsernamePasswordRequest, XSAuthenticationPINCodeRequest } from '@sh/base';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare abstract class SHAuthenticationBaseService {
    protected http: SHttpClientService;
    protected router: Router;
    private token?;
    private loggedInUsername?;
    private jwtHelper;
    abstract getEndpoint(): SHAuthenticationEndpoint;
    abstract getRoute(): SHAuthenticationRoute;
    constructor(http: SHttpClientService, router: Router);
    login(request: SHAuthenticationUsernamePasswordRequest | XSAuthenticationPINCodeRequest): Observable<HttpResponse<SHUser>>;
    register(user: SHUser): Observable<HttpResponse<SHUser>>;
    logOut(): void;
    saveToken(token: string): void;
    addUserToLocalStorage(user: SHUser): void;
    getUserFromLocalStorage(): SHUser | undefined;
    loadToken(): void;
    getToken(): string | undefined;
    isAuthenticate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHAuthenticationBaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHAuthenticationBaseService>;
}
