import { HttpParams } from '@angular/common/http';
export declare class SHUtils {
    static isEmpty(obj: any): boolean;
    static isNull(obj: any): boolean;
    static isString(obj: any): boolean;
    static notNull(obj: any, varName?: string): void;
    static notEmpty(obj: any, varName?: string): void;
    static isMap(obj: any): boolean;
    static convertMapToObject(map: Map<any, any>): {};
    static toHttpParameters(obj: any, fields?: string[]): HttpParams;
}
