import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import * as i1 from '@angular/common/http';

class ShBaseService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShBaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShBaseService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: ShBaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SHttpClientService {
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
}

/*
 * Public API Surface of sh-base
 */
// --- Services ---

/**
 * Generated bundle index. Do not edit.
 */

export { SHAddressType, SHBloodType, SHDayOfWeek, SHGender, SHHttpMethod, SHLanguage, SHMaritalStatus, SHPKDTOAuditFullState, SHPersonTitle, SHPredefinedPeriod, SHSortOrder, SHTemporalUnit, SHUtils, SHttpClientService, ShBaseComponent, ShBaseService };
//# sourceMappingURL=sh-base.mjs.map
