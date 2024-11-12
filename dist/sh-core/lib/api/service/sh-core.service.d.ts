import { Observable } from 'rxjs';
import { SHBaseService, SHPKDTO, SHPKDTOAuditFull, SHPKSearchFilter, SHSearchResult, SHttpClientService } from '@sh/base';
import * as i0 from "@angular/core";
export declare class SHCoreService<X extends SHPKDTO, P, S extends SHPKSearchFilter> extends SHBaseService<X, P, S> {
    protected httpClientService: SHttpClientService;
    private endpointBase;
    private resourceName;
    constructor(httpClientService: SHttpClientService, endpointBase: string, resourceName: string);
    create(body: any): Observable<X>;
    update(resourceID: string, fieldValueData: any): Observable<X>;
    findOneByID(resourceID: string): Observable<X>;
    retrieve(resourceID: string): Observable<X>;
    findF(search: S, fields: string[]): Observable<any[]>;
    find(search: S): Observable<P[]>;
    search(search: S): Observable<SHSearchResult<P>>;
    setAsDeleted(resourceID: string): Observable<SHPKDTOAuditFull>;
    purge(resourceID: string): Observable<void>;
    private buildEndpoint;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHCoreService<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHCoreService<any, any, any>>;
}
