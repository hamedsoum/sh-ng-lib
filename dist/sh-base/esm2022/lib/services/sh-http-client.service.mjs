import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SHttpClientService {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(endpoint, parameters, httpHeaders) {
        return this.httpClient.get(endpoint, { headers: httpHeaders, params: parameters });
    }
    post(endpoint, body, httpHeaders, parameters) {
        return this.httpClient.post(endpoint, body, { headers: httpHeaders, params: parameters });
    }
    put(endpoint, body, parameters, httpHeaders) {
        return this.httpClient.put(endpoint, body, { headers: httpHeaders, params: parameters });
    }
    patch(endpoint, body, parameters, httpHeaders) {
        return this.httpClient.patch(endpoint, body, { headers: httpHeaders, params: parameters });
    }
    delete(endpoint, parameters, httpHeaders) {
        return this.httpClient.delete(endpoint, { headers: httpHeaders, params: parameters });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2gtaHR0cC1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoLWJhc2Uvc3JjL2xpYi9zZXJ2aWNlcy9zaC1odHRwLWNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUt6QyxNQUFNLE9BQWdCLGtCQUFrQjtJQUVkO0lBQXRCLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBRXpDLEdBQUcsQ0FBSSxRQUFnQixFQUFFLFVBQXVCLEVBQUUsV0FBeUI7UUFDOUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTSxJQUFJLENBQUksUUFBZ0IsRUFBRSxJQUFTLEVBQUMsV0FBeUIsRUFBRSxVQUF1QjtRQUN6RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSxHQUFHLENBQUksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsVUFBdUIsRUFBRSxXQUF5QjtRQUN6RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFTSxLQUFLLENBQUksUUFBZ0IsRUFBRSxJQUFVLEVBQUUsVUFBdUIsRUFBRSxXQUF5QjtRQUM1RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFJLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFTSxNQUFNLENBQUksUUFBZ0IsRUFBRSxVQUF1QixFQUFFLFdBQXlCO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUksUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO3VHQXRCaUIsa0JBQWtCOzJHQUFsQixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztccmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxyQEluamVjdGFibGUoKVxyZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNIdHRwQ2xpZW50U2VydmljZSB7XHJcciAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCkge31cclxyICAgIHB1YmxpYyBnZXQ8VD4oZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1ldGVycz86IEh0dHBQYXJhbXMsIGh0dHBIZWFkZXJzPzogSHR0cEhlYWRlcnMpOiBPYnNlcnZhYmxlPFQ+IHtcciAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8VD4oZW5kcG9pbnQsIHtoZWFkZXJzOiBodHRwSGVhZGVycywgcGFyYW1zOiBwYXJhbWV0ZXJzIH0pO1xyICAgIH1cclxyICAgIHB1YmxpYyBwb3N0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIGJvZHk6IGFueSxodHRwSGVhZGVycz86IEh0dHBIZWFkZXJzLCBwYXJhbWV0ZXJzPzogSHR0cFBhcmFtcyk6IE9ic2VydmFibGU8VD4ge1xyICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VD4oZW5kcG9pbnQsIGJvZHksIHtoZWFkZXJzOiBodHRwSGVhZGVycywgcGFyYW1zOiBwYXJhbWV0ZXJzIH0pO1xyICAgIH1cclxyICAgIHB1YmxpYyBwdXQ8VD4oZW5kcG9pbnQ6IHN0cmluZywgYm9keTogYW55LCBwYXJhbWV0ZXJzPzogSHR0cFBhcmFtcywgaHR0cEhlYWRlcnM/OiBIdHRwSGVhZGVycyk6IE9ic2VydmFibGU8VD4ge1xyICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxUPihlbmRwb2ludCwgYm9keSwge2hlYWRlcnM6IGh0dHBIZWFkZXJzLCBwYXJhbXM6IHBhcmFtZXRlcnMgfSk7XHIgICAgfVxyXHIgICAgcHVibGljIHBhdGNoPFQ+KGVuZHBvaW50OiBzdHJpbmcsIGJvZHk/OiBhbnksIHBhcmFtZXRlcnM/OiBIdHRwUGFyYW1zLCBodHRwSGVhZGVycz86IEh0dHBIZWFkZXJzKTogT2JzZXJ2YWJsZTxUPiB7XHIgICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucGF0Y2g8VD4oZW5kcG9pbnQsIGJvZHksIHtoZWFkZXJzOiBodHRwSGVhZGVycywgcGFyYW1zOiBwYXJhbWV0ZXJzIH0pO1xyICAgIH1cclxyICAgIHB1YmxpYyBkZWxldGU8VD4oZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1ldGVycz86IEh0dHBQYXJhbXMsIGh0dHBIZWFkZXJzPzogSHR0cEhlYWRlcnMpOiBPYnNlcnZhYmxlPFQ+IHtcciAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5kZWxldGU8VD4oZW5kcG9pbnQsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMsIHBhcmFtczogcGFyYW1ldGVycyB9KTtcciAgICB9XHJ9XHIiXX0=