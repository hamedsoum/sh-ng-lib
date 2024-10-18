export interface SHProvince {
    name: string;
    code?: string;
}
export interface SHCoordinate {
    latitude: number;
    longitude: number;
}
export interface SHAddressStructured extends SHAddress {
    type: SHAddressType.STRUCTURED;
    line1: string;
    line2?: string;
    postalCode?: string;
    province?: SHProvince;
}
export interface SHAddressUnstructured extends SHAddress {
    type: SHAddressType.UNSTRUCTURED;
    line1: string;
    line2?: string;
    line3?: string;
}
export interface SHAddressBasic extends SHAddress {
    type: SHAddressType.BASIC;
}
export interface SHAddress {
    title?: string;
    subtitle?: string;
    type: SHAddressType;
    countryISO: string;
    city: string;
    continentCode?: string;
    coordinate?: SHCoordinate;
    placeID?: string;
}
export declare enum SHAddressType {
    BASIC = "basic",
    STRUCTURED = "structured",
    UNSTRUCTURED = "unstructured"
}
