import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/sh-authentication-base.service";
import * as i2 from "@angular/router";
export class AuthGuard {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, deps: [{ token: i1.SHAuthenticationBaseService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.SHAuthenticationBaseService }, { type: i2.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2gtYXV0aGVudGljYXRpb24tZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaC1hdXRoZW50aWNhdGlvbi9zcmMvbGliL2FwaS9ndWFyZC9zaC1hdXRoZW50aWNhdGlvbi1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzNDLE1BQU0sT0FBTyxTQUFTO0lBRVA7SUFDQTtJQUZYLFlBQ1cscUJBQWtELEVBQ2xELE1BQWM7UUFEZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQTZCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdEIsQ0FBQztJQUVKLFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8sY0FBYztRQUNsQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFBO0lBQzVFLENBQUM7dUdBZlEsU0FBUzsyR0FBVCxTQUFTLGNBRk4sTUFBTTs7MkZBRVQsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJpbXBvcnQge0NhbkFjdGl2YXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJpbXBvcnQge1NIQXV0aGVudGljYXRpb25CYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvc2gtYXV0aGVudGljYXRpb24tYmFzZS5zZXJ2aWNlJztcclxyQEluamVjdGFibGUoe1xyICAgIHByb3ZpZGVkSW46ICdyb290Jyxccn0pXHJleHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyICAgIGNvbnN0cnVjdG9yKFxyICAgICAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBTSEF1dGhlbnRpY2F0aW9uQmFzZVNlcnZpY2UsXHIgICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcciAgICApIHt9XHJcciAgICBjYW5BY3RpdmF0ZSgpOmJvb2xlYW4ge1xyICAgICAgICByZXR1cm4gdGhpcy5pc1VzZXJMb2dnZWRJbigpO1xyICAgIH1cclxyICAgIHByaXZhdGUgaXNVc2VyTG9nZ2VkSW4oKTpib29sZWFuIHtcciAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzQXV0aGVudGljYXRlKCkpIHJldHVybiB0cnVlO1xyXHIgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZvdXMgZGV2ZXogdm91cyBjb25uZWN0ZXogcG91ciBhdm9pciBhY2PDqXMgYXUgc3lzdMOobWUnKVxyICAgIH1ccn0iXX0=