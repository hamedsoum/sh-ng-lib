import { Observable } from 'rxjs';
import { SHPKSearchFilter } from '../domain/sh-resource';
import { SHPKDTO, SHPKDTOAuditFull } from '../domain/sh-audit';
import { SHSearchResult } from '../domain/sh-base';
export declare abstract class SHBaseService<X extends SHPKDTO, P, S extends SHPKSearchFilter> {
    abstract create(body: any): Observable<X>;
    abstract update(resourceID: string, fieldValueData: any): Observable<X>;
    abstract retrieve(resourceID: string): Observable<X>;
    abstract find(search: S): Observable<P[]>;
    abstract search(search: S): Observable<SHSearchResult<P>>;
    abstract setAsDeleted(resourceID: string): Observable<SHPKDTOAuditFull>;
    abstract purge(resourceID: string): Observable<void>;
}
