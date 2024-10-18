import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare abstract class SHttpClientService {
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    post<T>(endpoint: string, body: any, parameters?: HttpParams, httpHeaders?: HttpHeaders, nativeOptions?: any): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHttpClientService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHttpClientService>;
}
