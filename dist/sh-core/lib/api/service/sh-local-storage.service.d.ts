import * as i0 from "@angular/core";
export declare class SHLocalStorageService {
    getObject(key: string): any;
    setObject(key: string, data: any): void;
    getObjectProperty(ObjetKey: string, propertyKey: string): any;
    setObjectProperty(ObjetKey: string, key: string, data: string): void;
    removeItem(key: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SHLocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SHLocalStorageService>;
}
