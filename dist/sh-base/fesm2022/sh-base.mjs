import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class SHUtils {
    static isEmpty(obj) {
        if (SHUtils.isNull(obj)) {
            return true;
        }
        if (SHUtils.isString(obj) && obj.trim().length === 0) {
            return true;
        }
        if (obj instanceof Map || obj instanceof Set) {
            return obj.size === 0;
        }
        if (Array.isArray(obj) && obj.length === 0) {
            return true;
        }
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    static isNull(obj) {
        return obj === null || obj === undefined;
    }
    static isString(obj) {
        if (SHUtils.isNull(obj)) {
            return false;
        }
        return typeof obj === 'string' || obj instanceof String;
    }
    static notNull(obj, varName) {
        if (SHUtils.isNull(obj)) {
            throw new Error((!SHUtils.isEmpty(varName) ? varName : 'The given variable') + ' must not be null.');
        }
    }
    static notEmpty(obj, varName) {
        if (SHUtils.isEmpty(obj)) {
            throw new Error((!SHUtils.isEmpty(varName) ? varName : 'The given variable') + ' must not be empty or null.');
        }
    }
    static isMap(obj) {
        return obj instanceof Map;
    }
    static convertMapToObject(map) {
        if (SHUtils.isNull(map) || !SHUtils.isMap(map)) {
            throw new Error('map must be a non null instance of Map.');
        }
        return Object.fromEntries(map);
    }
    static toHttpParameters(obj, fields) {
        let params = new HttpParams();
        if (!SHUtils.isEmpty(obj)) {
            for (const [key, value] of Object.entries(obj)) {
                let pValue = value;
                params = params.set(key, pValue);
            }
        }
        if (!SHUtils.isEmpty(fields))
            params = params.set('fields', fields.join(','));
        return params;
    }
}

class SHBaseService {
    httpClientService;
    resourceName;
    endpointBase;
    constructor(httpClientService, endpointBase, resourceName) {
        this.httpClientService = httpClientService;
        SHUtils.notEmpty(endpointBase, endpointBase);
        SHUtils.notEmpty(resourceName, resourceName);
        this.resourceName = resourceName.trim();
        this.endpointBase = resourceName.trim();
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
}

class SHttpClientService {
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

class ShBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: ShBaseComponent, isStandalone: true, selector: "lib-sh-base", ngImport: i0, template: `
    <p>
      sh-base works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShBaseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sh-base', standalone: true, imports: [], template: `
    <p>
      sh-base works!
    </p>
  ` }]
        }] });

var SHSortOrder;
(function (SHSortOrder) {
    SHSortOrder["ASC"] = "asc";
    SHSortOrder["DESC"] = "desc";
})(SHSortOrder || (SHSortOrder = {}));
var SHPredefinedPeriod;
(function (SHPredefinedPeriod) {
    SHPredefinedPeriod["TODAY"] = "today";
    SHPredefinedPeriod["YESTERDAY"] = "yesterday";
    SHPredefinedPeriod["THIS_WEEK"] = "thisWeek";
    SHPredefinedPeriod["THIS_MONTH"] = "thisMonth";
    SHPredefinedPeriod["THIS_YEAR"] = "thisYear";
})(SHPredefinedPeriod || (SHPredefinedPeriod = {}));
var SHTemporalUnit;
(function (SHTemporalUnit) {
    SHTemporalUnit["YEARS"] = "years";
    SHTemporalUnit["MONTHS"] = "months";
    SHTemporalUnit["DAYS"] = "days";
    SHTemporalUnit["HOURS"] = "hours";
    SHTemporalUnit["MINUTES"] = "minutes";
    SHTemporalUnit["SECONDS"] = "seconds";
    SHTemporalUnit["MILLI_SECONDS"] = "milliSeconds";
})(SHTemporalUnit || (SHTemporalUnit = {}));
var SHHttpMethod;
(function (SHHttpMethod) {
    SHHttpMethod["GET"] = "GET";
    SHHttpMethod["POST"] = "POST";
    SHHttpMethod["PUT"] = "PUT";
    SHHttpMethod["DELETE"] = "DELETE";
    SHHttpMethod["PATCH"] = "PATCH";
})(SHHttpMethod || (SHHttpMethod = {}));
var SHLanguage;
(function (SHLanguage) {
    SHLanguage["ENGLISH"] = "en";
    SHLanguage["FRENCH"] = "fr";
    SHLanguage["SPANISH"] = "es";
})(SHLanguage || (SHLanguage = {}));
var SHDayOfWeek;
(function (SHDayOfWeek) {
    SHDayOfWeek["MONDAY"] = "monday";
    SHDayOfWeek["TUESDAY"] = "tuesday";
    SHDayOfWeek["WEDNESDAY"] = "wednesday";
    SHDayOfWeek["THURSDAY"] = "thursday";
    SHDayOfWeek["FRIDAY"] = "friday";
    SHDayOfWeek["SATURDAY"] = "saturday";
    SHDayOfWeek["SUNDAY"] = "sunday";
})(SHDayOfWeek || (SHDayOfWeek = {}));

var SHAddressType;
(function (SHAddressType) {
    SHAddressType["BASIC"] = "basic";
    SHAddressType["STRUCTURED"] = "structured";
    SHAddressType["UNSTRUCTURED"] = "unstructured";
})(SHAddressType || (SHAddressType = {}));

var SHPKDTOAuditFullState;
(function (SHPKDTOAuditFullState) {
    SHPKDTOAuditFullState["ACTIVE"] = "active";
    SHPKDTOAuditFullState["INACTIVE"] = "inactive";
    SHPKDTOAuditFullState["DELETED"] = "deleted";
})(SHPKDTOAuditFullState || (SHPKDTOAuditFullState = {}));

var SHPersonTitle;
(function (SHPersonTitle) {
    SHPersonTitle["MR"] = "mr";
    SHPersonTitle["MRS"] = "mrs";
    SHPersonTitle["MISS"] = "miss";
    SHPersonTitle["DR"] = "dr";
    SHPersonTitle["PR"] = "pr";
    SHPersonTitle["NA"] = "na";
})(SHPersonTitle || (SHPersonTitle = {}));
var SHGender;
(function (SHGender) {
    SHGender["NOT_KNOWN"] = "notKnown";
    SHGender["MALE"] = "male";
    SHGender["FEMALE"] = "female";
    SHGender["NOT_APPLICABLE"] = "notApplicable";
})(SHGender || (SHGender = {}));
var SHBloodType;
(function (SHBloodType) {
    SHBloodType["O_POSITIVE"] = "O+";
    SHBloodType["O_NEGATIVE"] = "O-";
    SHBloodType["A_POSITIVE"] = "A+";
    SHBloodType["A_NEGATIVE"] = "A-";
    SHBloodType["B_POSITIVE"] = "B+";
    SHBloodType["B_NEGATIVE"] = "B-";
    SHBloodType["AB_POSITIVE"] = "AB+";
    SHBloodType["AB_NEGATIVE"] = "AB-";
})(SHBloodType || (SHBloodType = {}));
var SHMaritalStatus;
(function (SHMaritalStatus) {
    SHMaritalStatus["SINGLE"] = "single";
    SHMaritalStatus["MARRIED"] = "married";
    SHMaritalStatus["DIVORCED"] = "divorced";
    SHMaritalStatus["WIDOWED"] = "widowed";
})(SHMaritalStatus || (SHMaritalStatus = {}));

/*
 * Public API Surface of sh-base
 */
// --- Services ---

/**
 * Generated bundle index. Do not edit.
 */

export { SHAddressType, SHBaseService, SHBloodType, SHDayOfWeek, SHGender, SHHttpMethod, SHLanguage, SHMaritalStatus, SHPKDTOAuditFullState, SHPersonTitle, SHPredefinedPeriod, SHSortOrder, SHTemporalUnit, SHUtils, SHttpClientService, ShBaseComponent };
//# sourceMappingURL=sh-base.mjs.map
