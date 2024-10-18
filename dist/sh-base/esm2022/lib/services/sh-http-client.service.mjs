import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SHttpClientService {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // public request<T>(method: SHHttpMethod, endpoint: string, options: {}): Observable<T> {
    //     ShUtils.notEmpty(method, 'method');
    //     return this.httpClient.request<T>(method.toString(), endpoint, options);
    // }
    //
    // public get<T>(endpoint: string, parameters?: HttpParams, httpHeaders?: HttpHeaders, nativeOptions?: any): Observable<T> {
    //     return this.httpClient.get<T>(this.buildEndpoint(endpoint), this.buildOptions(parameters, httpHeaders, nativeOptions));
    // }
    //
    post(endpoint, body, parameters, httpHeaders, nativeOptions) {
        return this.httpClient.post(endpoint, body, {});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHttpClientService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2gtaHR0cC1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoLWJhc2Uvc3JjL2xpYi9zZXJ2aWNlcy9zaC1odHRwLWNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQU16QyxNQUFNLE9BQWdCLGtCQUFrQjtJQUVkO0lBQXRCLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDNUMsQ0FBQztJQUVELDBGQUEwRjtJQUMxRiwwQ0FBMEM7SUFDMUMsK0VBQStFO0lBQy9FLElBQUk7SUFDSixFQUFFO0lBQ0YsNEhBQTRIO0lBQzVILDhIQUE4SDtJQUM5SCxJQUFJO0lBQ0osRUFBRTtJQUNLLElBQUksQ0FBSSxRQUFnQixFQUFFLElBQVMsRUFBRSxVQUF1QixFQUFFLFdBQXlCLEVBQUUsYUFBbUI7UUFDL0csT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBSSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7dUdBaEJpQixrQkFBa0I7MkdBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyaW1wb3J0IHtTSEh0dHBNZXRob2R9IGZyb20gJy4uL2RvbWFpbi9zaC1iYXNlJztcclxyQEluamVjdGFibGUoKVxyZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNIdHRwQ2xpZW50U2VydmljZSB7XHJcciAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyICAgIH1cclxyICAgIC8vIHB1YmxpYyByZXF1ZXN0PFQ+KG1ldGhvZDogU0hIdHRwTWV0aG9kLCBlbmRwb2ludDogc3RyaW5nLCBvcHRpb25zOiB7fSk6IE9ic2VydmFibGU8VD4ge1xyICAgIC8vICAgICBTaFV0aWxzLm5vdEVtcHR5KG1ldGhvZCwgJ21ldGhvZCcpO1xyICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8VD4obWV0aG9kLnRvU3RyaW5nKCksIGVuZHBvaW50LCBvcHRpb25zKTtcciAgICAvLyB9XHIgICAgLy9cciAgICAvLyBwdWJsaWMgZ2V0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIHBhcmFtZXRlcnM/OiBIdHRwUGFyYW1zLCBodHRwSGVhZGVycz86IEh0dHBIZWFkZXJzLCBuYXRpdmVPcHRpb25zPzogYW55KTogT2JzZXJ2YWJsZTxUPiB7XHIgICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHRoaXMuYnVpbGRFbmRwb2ludChlbmRwb2ludCksIHRoaXMuYnVpbGRPcHRpb25zKHBhcmFtZXRlcnMsIGh0dHBIZWFkZXJzLCBuYXRpdmVPcHRpb25zKSk7XHIgICAgLy8gfVxyICAgIC8vXHIgICAgcHVibGljIHBvc3Q8VD4oZW5kcG9pbnQ6IHN0cmluZywgYm9keTogYW55LCBwYXJhbWV0ZXJzPzogSHR0cFBhcmFtcywgaHR0cEhlYWRlcnM/OiBIdHRwSGVhZGVycywgbmF0aXZlT3B0aW9ucz86IGFueSk6IE9ic2VydmFibGU8VD4ge1xyICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VD4oZW5kcG9pbnQsIGJvZHksIHt9KTtcciAgICB9XHIgICAgLy9cciAgICAvLyBwdWJsaWMgcHV0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIGJvZHk6IGFueSwgcGFyYW1ldGVycz86IEh0dHBQYXJhbXMsIGh0dHBIZWFkZXJzPzogSHR0cEhlYWRlcnMsIG5hdGl2ZU9wdGlvbnM/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcciAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8VD4odGhpcy5idWlsZEVuZHBvaW50KGVuZHBvaW50KSwgYm9keSwgdGhpcy5idWlsZE9wdGlvbnMocGFyYW1ldGVycywgaHR0cEhlYWRlcnMsIG5hdGl2ZU9wdGlvbnMpKTtcciAgICAvLyB9XHIgICAgLy9cciAgICAvLyBwdWJsaWMgcGF0Y2g8VD4oZW5kcG9pbnQ6IHN0cmluZywgYm9keT86IGFueSwgcGFyYW1ldGVycz86IEh0dHBQYXJhbXMsIGh0dHBIZWFkZXJzPzogSHR0cEhlYWRlcnMsIG5hdGl2ZU9wdGlvbnM/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcciAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wYXRjaDxUPih0aGlzLmJ1aWxkRW5kcG9pbnQoZW5kcG9pbnQpLCBib2R5LCB0aGlzLmJ1aWxkT3B0aW9ucyhwYXJhbWV0ZXJzLCBodHRwSGVhZGVycywgbmF0aXZlT3B0aW9ucykpO1xyICAgIC8vIH1cciAgICAvL1xyICAgIC8vIHB1YmxpYyBkZWxldGU8VD4oZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1ldGVycz86IEh0dHBQYXJhbXMsIGh0dHBIZWFkZXJzPzogSHR0cEhlYWRlcnMsIG5hdGl2ZU9wdGlvbnM/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcciAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5kZWxldGU8VD4odGhpcy5idWlsZEVuZHBvaW50KGVuZHBvaW50KSwgdGhpcy5idWlsZE9wdGlvbnMocGFyYW1ldGVycywgaHR0cEhlYWRlcnMsIG5hdGl2ZU9wdGlvbnMpKTtcciAgICAvLyB9XHJ9XHIiXX0=