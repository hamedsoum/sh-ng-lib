import { Observable } from 'rxjs';
import { SHttpClientService } from './sh-http-client.service';
import { SHPKSearchFilter } from '../domain/sh-resource';
import { SHPKDTO, SHPKDTOAuditFull } from '../domain/sh-audit';
import { SHSearchResult } from '../domain/sh-base';
export declare class SHBaseService<X extends SHPKDTO, P, S extends SHPKSearchFilter> {
    protected httpClientService: SHttpClientService;
    protected resourceName: string;
    protected readonly endpointBase: string;
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
}
