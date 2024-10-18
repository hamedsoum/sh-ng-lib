import { CanActivate, Router } from '@angular/router';
import { SHAuthenticationBaseService } from '../services/sh-authentication-base.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    authenticationService: SHAuthenticationBaseService;
    router: Router;
    constructor(authenticationService: SHAuthenticationBaseService, router: Router);
    canActivate(): boolean;
    private isUserLoggedIn;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
