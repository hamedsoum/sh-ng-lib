import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as i1 from '@sh/base';
import { SHUtils } from '@sh/base';
import * as i2 from '@angular/router';

class ShAuthenticationService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShAuthenticationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShAuthenticationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShAuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ShAuthenticationComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShAuthenticationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: ShAuthenticationComponent, isStandalone: true, selector: "lib-sh-authentication", ngImport: i0, template: `
    <p>
      sh-authentication works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShAuthenticationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sh-authentication', standalone: true, imports: [], template: `
    <p>
      sh-authentication works!
    </p>
  ` }]
        }] });

const XS_AUTHENTICATION_ROUTE = {
    login: 'login',
    forgotPassword: 'forgot-password',
    forgotPINCode: 'forgot-pin-code',
    help: 'help'
};

const XS_STORAGE_KEY_TOKEN = 'token';
const XS_STORAGE_KEY_TOKEN_EXPIRATION = 'tokenExpiration';
const XS_STORAGE_KEY_USER = 'user';
const XS_STORAGE_KEY_USERNAME = 'username';
const XS_STORAGE_KEY_LANGUAGE = 'language';
const XS_STORAGE_KEY_DOMAIN_ID = 'domainID';
const XS_STORAGE_KEY_DOMAIN_NAME = 'domainName';
const TOKEN_HEADER_KEY = 'Authorization';

class SHAuthenticationBaseService {
    http;
    router;
    token;
    loggedInUsername;
    jwtHelper = new JwtHelperService;
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(request) {
        console.log(" ===| Login function call from authentication library service |===");
        return this.http.post(this.getEndpoint().login, request);
    }
    register(user) {
        return this.http.post(this.getEndpoint().register, user);
    }
    logOut() {
        this.token = undefined;
        this.loggedInUsername = undefined;
        localStorage.removeItem(XS_STORAGE_KEY_USER);
        // localStorage.removeItem('token');
        sessionStorage.removeItem(XS_STORAGE_KEY_TOKEN);
        localStorage.removeItem(XS_STORAGE_KEY_USER);
        this.router.navigate([this.getRoute().login]).then();
    }
    saveToken(token) {
        this.token = token;
        this.loggedInUsername = undefined;
        // localStorage.setItem('token', token);
        sessionStorage.setItem(XS_STORAGE_KEY_TOKEN, token);
    }
    addUserToLocalStorage(user) {
        localStorage.setItem(XS_STORAGE_KEY_USER, JSON.stringify(user));
    }
    getUserFromLocalStorage() {
        return !SHUtils.isEmpty(localStorage.getItem(XS_STORAGE_KEY_USER)) ? JSON.parse(localStorage.getItem('user')) : undefined;
    }
    loadToken() {
        // this.token = localStorage.getItem('token');
        if (!SHUtils.isEmpty(sessionStorage.getItem(XS_STORAGE_KEY_TOKEN)))
            this.token = sessionStorage.getItem('token');
    }
    getToken() {
        return this.token;
    }
    isAuthenticate() {
        this.loadToken();
        if (!SHUtils.isEmpty(this.token)) {
            if (!SHUtils.isEmpty(this.jwtHelper.decodeToken(this.token).sub)) {
                if (!this.jwtHelper.isTokenExpired(this.token)) {
                    this.loggedInUsername = this.jwtHelper.decodeToken(this.token);
                    return true;
                }
            }
        }
        this.logOut();
        return false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationBaseService, deps: [{ token: i1.SHttpClientService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationBaseService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationBaseService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.SHttpClientService }, { type: i2.Router }] });

class AuthGuard {
    authenticationService;
    router;
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate() {
        return this.isUserLoggedIn();
    }
    isUserLoggedIn() {
        if (this.authenticationService.isAuthenticate())
            return true;
        this.router.navigate(['/login']);
        throw new Error('vous devez vous connectez pour avoir accés au système');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, deps: [{ token: SHAuthenticationBaseService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: SHAuthenticationBaseService }, { type: i2.Router }] });

class SHAuthenticationInterceptor {
    authenticationService;
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(httpRequest, httpHandler) {
        this.authenticationService.loadToken();
        const token = this.authenticationService.getToken();
        const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        return httpHandler.handle(request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor, deps: [{ token: SHAuthenticationBaseService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: SHAuthenticationBaseService }] });

/*
 * Public API Surface of sh-authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuard, SHAuthenticationBaseService, SHAuthenticationInterceptor, ShAuthenticationComponent, ShAuthenticationService, XS_AUTHENTICATION_ROUTE };
//# sourceMappingURL=sh-authentication.mjs.map
