import { SHPKDTOAuditFull } from './sh-audit';
import { SHBloodType, SHGender, SHPersonName } from './sh-person';
import { SHAddress } from './sh-address';
import { SHLanguage } from './sh-base';
export interface SHUser extends SHPKDTOAuditFull {
    code: string;
    name?: SHPersonName;
    gender?: SHGender;
    bloodType?: SHBloodType;
    email?: string;
    primaryPhoneNumber: string;
    secondaryPhoneNumber?: string;
    passwordUpdatedOn?: string;
    address?: SHAddress;
    birthDate?: string;
    language?: SHLanguage;
    profileImage?: string;
    note?: string;
}
export interface SHUserPartial {
    id: string;
    code: string;
    name?: SHPersonName;
    primaryPhoneNumber: string;
    email?: string;
    language?: SHLanguage;
    profileImage?: string;
}
