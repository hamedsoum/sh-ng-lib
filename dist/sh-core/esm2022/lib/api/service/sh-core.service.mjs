import { Inject, Injectable } from '@angular/core';
import { SHBaseService, SHUtils } from '@sh/base';
import * as i0 from "@angular/core";
import * as i1 from "@sh/base";
export class SHCoreService extends SHBaseService {
    httpClientService;
    endpointBase;
    resourceName;
    constructor(httpClientService, endpointBase, resourceName) {
        super();
        this.httpClientService = httpClientService;
        this.endpointBase = endpointBase;
        this.resourceName = resourceName;
        SHUtils.notEmpty(endpointBase, endpointBase);
        SHUtils.notEmpty(resourceName, resourceName);
    }
    create(body) {
        SHUtils.notEmpty(body, this.resourceName);
        return this.httpClientService.post(this.buildEndpoint(), body);
    }
    update(resourceID, fieldValueData) {
        SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
        SHUtils.notEmpty(fieldValueData, 'fieldValueData');
        let body = SHUtils.isMap(fieldValueData) ? SHUtils.convertMapToObject(fieldValueData) : fieldValueData;
        return this.httpClientService.patch(this.buildEndpoint(resourceID), body);
    }
    findOneByID(resourceID) {
        SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
        return this.httpClientService.get(this.buildEndpoint(resourceID));
    }
    retrieve(resourceID) {
        return this.findOneByID(resourceID);
    }
    findF(search, fields) {
        return this.httpClientService.get(this.buildEndpoint(), SHUtils.toHttpParameters(search, fields));
    }
    find(search) {
        return this.httpClientService.get(this.buildEndpoint(), SHUtils.toHttpParameters(search));
    }
    search(search) {
        SHUtils.notEmpty(search, this.resourceName + 'Search');
        SHUtils.notNull(search.paginationPage, 'search.paginationPage');
        SHUtils.notNull(search.paginationSize, 'search.paginationSize');
        // TODO: implement below method
        // SHUtils.removeNullAndUndefinedEntries(search);
        // SHUtils.removeEmptyObjectEntries(search);
        return this.httpClientService.get(this.buildEndpoint('search'), SHUtils.toHttpParameters(search));
    }
    setAsDeleted(resourceID) {
        SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
        return this.httpClientService.patch(this.buildEndpoint(resourceID));
    }
    purge(resourceID) {
        SHUtils.notEmpty(resourceID, this.resourceName + 'ID');
        return this.httpClientService.delete(this.buildEndpoint(resourceID));
    }
    buildEndpoint(resourceID) {
        return !SHUtils.isEmpty(resourceID) ? `${this.endpointBase}/${resourceID}` : this.endpointBase;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHCoreService, deps: [{ token: i1.SHttpClientService }, { token: 'endpointBase' }, { token: 'resourceName' }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHCoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHCoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.SHttpClientService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['endpointBase']
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['resourceName']
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2gtY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2gtY29yZS9zcmMvbGliL2FwaS9zZXJ2aWNlL3NoLWNvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUMsYUFBYSxFQUFtRixPQUFPLEVBQUMsTUFBTSxVQUFVLENBQUM7OztBQUtqSSxNQUFNLE9BQU8sYUFBaUUsU0FBUSxhQUFvQjtJQUdsRjtJQUFzRTtJQUFxRDtJQUFqSixZQUFzQixpQkFBcUMsRUFBaUMsWUFBb0IsRUFBaUMsWUFBb0I7UUFDcEssS0FBSyxFQUFFLENBQUM7UUFEYSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBQWlDLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQWlDLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBRW5LLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBUztRQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQWtCLEVBQUUsY0FBbUI7UUFDbkQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxn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QWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFJOEQsTUFBTTsyQkFBQyxjQUFjOzswQkFBZ0MsTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U0hCYXNlU2VydmljZSwgU0hQS0RUTywgU0hQS0RUT0F1ZGl0RnVsbCwgU0hQS1NlYXJjaEZpbHRlciwgU0hTZWFyY2hSZXN1bHQsIFNIdHRwQ2xpZW50U2VydmljZSwgU0hVdGlsc30gZnJvbSAnQHNoL2Jhc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTSENvcmVTZXJ2aWNlPFggZXh0ZW5kcyBTSFBLRFRPICwgUCwgUyBleHRlbmRzIFNIUEtTZWFyY2hGaWx0ZXI+IGV4dGVuZHMgU0hCYXNlU2VydmljZTxYLFAsUz4ge1xuXG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnRTZXJ2aWNlOiBTSHR0cENsaWVudFNlcnZpY2UsQEluamVjdCgnZW5kcG9pbnRCYXNlJykgcHJpdmF0ZSBlbmRwb2ludEJhc2U6IHN0cmluZyxASW5qZWN0KCdyZXNvdXJjZU5hbWUnKSBwcml2YXRlIHJlc291cmNlTmFtZTogc3RyaW5nKSB7XG4gICBzdXBlcigpO1xuICAgIFNIVXRpbHMubm90RW1wdHkoZW5kcG9pbnRCYXNlLCBlbmRwb2ludEJhc2UpO1xuICAgIFNIVXRpbHMubm90RW1wdHkocmVzb3VyY2VOYW1lLCByZXNvdXJjZU5hbWUpO1xuXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKGJvZHk6IGFueSk6IE9ic2VydmFibGU8WD4ge1xuICAgIFNIVXRpbHMubm90RW1wdHkoYm9keSwgdGhpcy5yZXNvdXJjZU5hbWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRTZXJ2aWNlLnBvc3Q8WD4odGhpcy5idWlsZEVuZHBvaW50KCksIGJvZHkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShyZXNvdXJjZUlEOiBzdHJpbmcsIGZpZWxkVmFsdWVEYXRhOiBhbnkpOiBPYnNlcnZhYmxlPFg+IHtcbiAgICBTSFV0aWxzLm5vdEVtcHR5KHJlc291cmNlSUQsIHRoaXMucmVzb3VyY2VOYW1lICsgJ0lEJyk7XG4gICAgU0hVdGlscy5ub3RFbXB0eShmaWVsZFZhbHVlRGF0YSwgJ2ZpZWxkVmFsdWVEYXRhJyk7XG4gICAgbGV0IGJvZHkgPSBTSFV0aWxzLmlzTWFwKGZpZWxkVmFsdWVEYXRhKSA/IFNIVXRpbHMuY29udmVydE1hcFRvT2JqZWN0KGZpZWxkVmFsdWVEYXRhKSA6IGZpZWxkVmFsdWVEYXRhO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRTZXJ2aWNlLnBhdGNoPFg+KHRoaXMuYnVpbGRFbmRwb2ludChyZXNvdXJjZUlEKSwgYm9keSk7XG4gIH1cblxuICBwdWJsaWMgZmluZE9uZUJ5SUQocmVzb3VyY2VJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxYPiB7XG4gICAgU0hVdGlscy5ub3RFbXB0eShyZXNvdXJjZUlELCB0aGlzLnJlc291cmNlTmFtZSArICdJRCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRTZXJ2aWNlLmdldDxYPih0aGlzLmJ1aWxkRW5kcG9pbnQocmVzb3VyY2VJRCkpO1xuICB9XG5cbiAgcHVibGljIHJldHJpZXZlKHJlc291cmNlSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8WD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRPbmVCeUlEKHJlc291cmNlSUQpO1xuICB9XG5cbiAgcHVibGljIGZpbmRGKHNlYXJjaDogUywgZmllbGRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50U2VydmljZS5nZXQ8YW55W10+KHRoaXMuYnVpbGRFbmRwb2ludCgpLCBTSFV0aWxzLnRvSHR0cFBhcmFtZXRlcnMoc2VhcmNoLCBmaWVsZHMpKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kKHNlYXJjaDogUyk6IE9ic2VydmFibGU8UFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFNlcnZpY2UuZ2V0PFBbXT4odGhpcy5idWlsZEVuZHBvaW50KCksIFNIVXRpbHMudG9IdHRwUGFyYW1ldGVycyhzZWFyY2gpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2goc2VhcmNoOiBTKTogT2JzZXJ2YWJsZTxTSFNlYXJjaFJlc3VsdDxQPj4ge1xuICAgIFNIVXRpbHMubm90RW1wdHkoc2VhcmNoLCB0aGlzLnJlc291cmNlTmFtZSArICdTZWFyY2gnKTtcbiAgICBTSFV0aWxzLm5vdE51bGwoc2VhcmNoLnBhZ2luYXRpb25QYWdlLCAnc2VhcmNoLnBhZ2luYXRpb25QYWdlJyk7XG4gICAgU0hVdGlscy5ub3ROdWxsKHNlYXJjaC5wYWdpbmF0aW9uU2l6ZSwgJ3NlYXJjaC5wYWdpbmF0aW9uU2l6ZScpO1xuICAgIC8vIFRPRE86IGltcGxlbWVudCBiZWxvdyBtZXRob2RcbiAgICAvLyBTSFV0aWxzLnJlbW92ZU51bGxBbmRVbmRlZmluZWRFbnRyaWVzKHNlYXJjaCk7XG4gICAgLy8gU0hVdGlscy5yZW1vdmVFbXB0eU9iamVjdEVudHJpZXMoc2VhcmNoKTtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50U2VydmljZS5nZXQ8U0hTZWFyY2hSZXN1bHQ8UD4+KHRoaXMuYnVpbGRFbmRwb2ludCgnc2VhcmNoJyksIFNIVXRpbHMudG9IdHRwUGFyYW1ldGVycyhzZWFyY2gpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBc0RlbGV0ZWQocmVzb3VyY2VJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTSFBLRFRPQXVkaXRGdWxsPiB7XG4gICAgU0hVdGlscy5ub3RFbXB0eShyZXNvdXJjZUlELCB0aGlzLnJlc291cmNlTmFtZSArICdJRCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRTZXJ2aWNlLnBhdGNoPFNIUEtEVE9BdWRpdEZ1bGw+KHRoaXMuYnVpbGRFbmRwb2ludChyZXNvdXJjZUlEKSk7XG4gIH1cblxuICBwdWJsaWMgcHVyZ2UocmVzb3VyY2VJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgU0hVdGlscy5ub3RFbXB0eShyZXNvdXJjZUlELCB0aGlzLnJlc291cmNlTmFtZSArICdJRCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRTZXJ2aWNlLmRlbGV0ZTx2b2lkPih0aGlzLmJ1aWxkRW5kcG9pbnQocmVzb3VyY2VJRCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVuZHBvaW50KHJlc291cmNlSUQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAhU0hVdGlscy5pc0VtcHR5KHJlc291cmNlSUQpID8gYCR7dGhpcy5lbmRwb2ludEJhc2V9LyR7cmVzb3VyY2VJRH1gIDogdGhpcy5lbmRwb2ludEJhc2U7XG4gIH1cbn1cbiJdfQ==