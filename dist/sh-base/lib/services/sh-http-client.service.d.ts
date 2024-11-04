import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare abstract class SHttpClientService {
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    get<T>(endpoint: string, parameters?: HttpParams, httpHeaders?: HttpHeaders): Observable<T>;
    post<T>(endpoint: string, body: any, httpHeaders?: HttpHeaders, parameters?: HttpParams): Observable<T>;
    put<T>(endpoint: string, body: any, parameters?: HttpParams, httpHeaders?: HttpHeaders): Observable<T>;
    patch<T>(endpoint: string, body?: any, parameters?: HttpParams, httpHeaders?: HttpHeaders): Observable<T>;
    delete<T>(endpoint: string, parameters?: HttpParams, httpHeaders?: HttpHeaders): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHttpClientService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHttpClientService>;
}
