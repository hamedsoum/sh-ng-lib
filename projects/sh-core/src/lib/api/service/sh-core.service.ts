import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SHBaseService, SHPKDTO, SHPKDTOAuditFull, SHPKSearchFilter, SHSearchResult, SHttpClientService, SHUtils} from '@sh/base';

@Injectable({
  providedIn: 'root'
})
export class SHCoreService<X extends SHPKDTO , P, S extends SHPKSearchFilter> extends SHBaseService<X,P,S> {


  constructor(protected httpClientService: SHttpClientService,@Inject('endpointBase') private endpointBase: string,@Inject('resourceName') private resourceName: string) {
   super();
    SHUtils.notEmpty(endpointBase, endpointBase);
    SHUtils.notEmpty(resourceName, resourceName);

  }

  public create(body: any): Observable<X> {
    SHUtils.notEmpty(body, this.resourceName);
    return this.httpClientService.post<X>(this.buildEndpoint(), body);
  }

  public update(resourceID: string, fieldValueData: any): Observable<X> {
    SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
    SHUtils.notEmpty(fieldValueData, 'fieldValueData');
    let body = SHUtils.isMap(fieldValueData) ? SHUtils.convertMapToObject(fieldValueData) : fieldValueData;
    return this.httpClientService.patch<X>(this.buildEndpoint(resourceID), body);
  }

  public findOneByID(resourceID: string): Observable<X> {
    SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
    return this.httpClientService.get<X>(this.buildEndpoint(resourceID));
  }

  public retrieve(resourceID: string): Observable<X> {
    return this.findOneByID(resourceID);
  }

  public findF(search: S, fields: string[]): Observable<any[]> {
    return this.httpClientService.get<any[]>(this.buildEndpoint(), SHUtils.toHttpParameters(search, fields));
  }

  public find(search: S): Observable<P[]> {
    return this.httpClientService.get<P[]>(this.buildEndpoint(), SHUtils.toHttpParameters(search));
  }

  public search(search: S): Observable<SHSearchResult<P>> {
    SHUtils.notEmpty(search, this.resourceName + 'Search');
    SHUtils.notNull(search.paginationPage, 'search.paginationPage');
    SHUtils.notNull(search.paginationSize, 'search.paginationSize');
    // TODO: implement below method
    // SHUtils.removeNullAndUndefinedEntries(search);
    // SHUtils.removeEmptyObjectEntries(search);
    return this.httpClientService.get<SHSearchResult<P>>(this.buildEndpoint('search'), SHUtils.toHttpParameters(search));
  }

  public setAsDeleted(resourceID: string): Observable<SHPKDTOAuditFull> {
    SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
    return this.httpClientService.patch<SHPKDTOAuditFull>(this.buildEndpoint(resourceID));
  }

  public purge(resourceID: string): Observable<void> {
    SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
    return this.httpClientService.delete<void>(this.buildEndpoint(resourceID));
  }

  private buildEndpoint(resourceID?: string): string {
    return !SHUtils.isEmpty(resourceID) ? `${this.endpointBase}/${resourceID}` : this.endpointBase;
  }
}
