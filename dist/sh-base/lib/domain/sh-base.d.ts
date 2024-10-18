export declare enum SHSortOrder {
    ASC = "asc",
    DESC = "desc"
}
export interface SHPagination {
    page: number;
    size: number;
}
export interface SHSortItem {
    field: string;
    order: SHSortOrder;
}
export interface SHSort {
    by: SHSortItem[];
}
export interface SHAudit {
    createdOn?: string;
    createdBy?: any;
    updatedOn?: string;
    updatedBy?: any;
}
export declare enum SHPredefinedPeriod {
    TODAY = "today",
    YESTERDAY = "yesterday",
    THIS_WEEK = "thisWeek",
    THIS_MONTH = "thisMonth",
    THIS_YEAR = "thisYear"
}
export interface SHTemporal {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliSeconds?: number;
}
export declare enum SHTemporalUnit {
    YEARS = "years",
    MONTHS = "months",
    DAYS = "days",
    HOURS = "hours",
    MINUTES = "minutes",
    SECONDS = "seconds",
    MILLI_SECONDS = "milliSeconds"
}
export declare enum SHHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export type SHTranslatableString = Partial<Record<SHLanguage, string>>;
export declare enum SHLanguage {
    ENGLISH = "en",
    FRENCH = "fr",
    SPANISH = "es"
}
export declare enum SHDayOfWeek {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday"
}
export type SHDayOfWeekStr = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
