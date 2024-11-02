export declare enum SHPKDTOAuditFullState {
    ACTIVE = "active",
    INACTIVE = "inactive",
    DELETED = "deleted"
}
export interface SHPKDTOAuditFull<T = any> extends SHPKDTOAuditUpdated<T> {
    state: SHPKDTOAuditFullState;
    active?: boolean;
    activeUpdatedOn?: string;
    activeUpdatedBy?: T;
    deleted?: boolean;
    deletedOn?: string;
    deletedBy?: T;
    restoredOn?: string;
    restoredBy?: T;
}
export interface SHPKDTOAuditUpdated<T = any> extends SHPKDTOAuditCreated<T> {
    updatedBy?: T;
    updatedOn?: string;
}
export interface SHPKDTOAuditUpdatedOn extends SHPKDTOAuditCreatedOn {
    updatedOn?: string;
}
export interface SHPKDTOAuditCreatedOn extends SHPKDTO {
    createdOn: string;
}
export interface SHPKDTOAuditCreated<T = any> extends SHPKDTO {
    createdBy: T;
    createdOn: string;
}
export interface SHPKDTO {
    id: string;
}