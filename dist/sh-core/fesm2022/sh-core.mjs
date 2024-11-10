import * as i0 from '@angular/core';
import { Injectable, Inject, Component } from '@angular/core';
import * as i1 from '@sh/base';
import { SHBaseService, SHUtils } from '@sh/base';

class SHCoreService extends SHBaseService {
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

class SHLocalStorageService {
    getObject(key) {
        SHUtils.notEmpty(key, "key");
        const dataStr = localStorage.getItem(key.trim());
        return !SHUtils.isNull(dataStr) ? JSON.parse(dataStr) : null;
    }
    setObject(key, data) {
        SHUtils.notEmpty(key, "key");
        SHUtils.notEmpty(data, "data");
        const jsonDataStr = JSON.stringify(data);
        localStorage.setItem(key.trim(), jsonDataStr);
    }
    getObjectProperty(ObjetKey, propertyKey) {
        SHUtils.notEmpty(ObjetKey, "ObjetKey");
        SHUtils.notEmpty(propertyKey, "propertyKey");
        const object = this.getObject(ObjetKey);
        if (SHUtils.isNull(object))
            return null;
        else {
            const property = object[propertyKey];
            return !SHUtils.isNull(property) ? property : null;
        }
    }
    setObjectProperty(ObjetKey, key, data) {
        SHUtils.notEmpty(ObjetKey, "ObjetKey");
        SHUtils.notEmpty(key, "key");
        SHUtils.notEmpty(data, "data");
        const map = new Map().set(key.trim(), data);
        localStorage.setItem(ObjetKey.trim(), JSON.stringify(map));
    }
    removeItem(key) {
        SHUtils.notEmpty(key, "key");
        return localStorage.removeItem(key.trim());
    }
    clear() {
        localStorage.clear();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHLocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHLocalStorageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: SHLocalStorageService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class ShCoreComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: ShCoreComponent, isStandalone: true, selector: "lib-sh-core", ngImport: i0, template: `
    <p>
      sh-core works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShCoreComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sh-core', standalone: true, imports: [], template: `
    <p>
      sh-core works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of sh-core
 */
//--- Services ---

/**
 * Generated bundle index. Do not edit.
 */

export { SHCoreService, SHLocalStorageService, ShCoreComponent };
//# sourceMappingURL=sh-core.mjs.map
