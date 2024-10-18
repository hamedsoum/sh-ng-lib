import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/sh-authentication-base.service";
export class SHAuthenticationInterceptor {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor, deps: [{ token: i1.SHAuthenticationBaseService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHAuthenticationInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.SHAuthenticationBaseService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2gtYXV0aGVudGljYXRpb24uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaC1hdXRoZW50aWNhdGlvbi9zcmMvbGliL2FwaS9pbnRlcmNlcHRvci9zaC1hdXRoZW50aWNhdGlvbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLDJCQUEyQjtJQUVoQjtJQUFwQixZQUFvQixxQkFBa0Q7UUFBbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE2QjtJQUFHLENBQUM7SUFFMUUsU0FBUyxDQUFDLFdBQTZCLEVBQUUsV0FBd0I7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFHLEVBQUMsYUFBYSxFQUFHLFVBQVUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFdkYsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7dUdBVlEsMkJBQTJCOzJHQUEzQiwyQkFBMkI7OzJGQUEzQiwyQkFBMkI7a0JBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJpbXBvcnQge0h0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztccmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztccmltcG9ydCB7U0hBdXRoZW50aWNhdGlvbkJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zaC1hdXRoZW50aWNhdGlvbi1iYXNlLnNlcnZpY2UnO1xyXHJASW5qZWN0YWJsZSgpXHJleHBvcnQgY2xhc3MgU0hBdXRoZW50aWNhdGlvbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxyICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBTSEF1dGhlbnRpY2F0aW9uQmFzZVNlcnZpY2UpIHt9XHJcciAgICBpbnRlcmNlcHQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIGh0dHBIYW5kbGVyOiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcciAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9hZFRva2VuKCk7XHIgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VG9rZW4oKTtcciAgICAgICAgY29uc3QgcmVxdWVzdCA9IGh0dHBSZXF1ZXN0LmNsb25lKHtzZXRIZWFkZXJzIDoge0F1dGhvcml6YXRpb24gOiBgQmVhcmVyICR7dG9rZW59YCB9fSk7XHJcciAgICAgICAgcmV0dXJuIGh0dHBIYW5kbGVyLmhhbmRsZShyZXF1ZXN0KTtcciAgICB9XHJ9Il19