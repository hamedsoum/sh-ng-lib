import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SHAuthenticationBaseService } from '../services/sh-authentication-base.service';
import * as i0 from "@angular/core";
export declare class SHAuthenticationInterceptor implements HttpInterceptor {
    private authenticationService;
    constructor(authenticationService: SHAuthenticationBaseService);
    intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHAuthenticationInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHAuthenticationInterceptor>;
}
