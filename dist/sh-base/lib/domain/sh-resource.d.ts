export interface SHPKSearchFilter extends SHSearchFilter {
    query?: string;
    ids?: string[];
}
export interface SHSearchFilter {
    limit?: number;
    sort?: string[];
    paginationPage?: number;
    paginationSize?: number;
    paginationSort?: string[];
}
