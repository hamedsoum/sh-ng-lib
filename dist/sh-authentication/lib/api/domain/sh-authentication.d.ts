import { SHUserPartial } from '@sh/base';
export interface SHAuthenticationRoute {
    dashboard: string;
    base: string;
    login: string;
    forgotPassword: string;
    updatePasswordRequired: string;
    help: string;
}
export interface SHAuthenticationEndpoint {
    register: string;
    login: string;
    logout: string;
    verifyUsername: string;
    sendVerificationCode: string;
    validateVerificationCode: string;
    resetPassword: string;
    updatePassword: string;
    verifyPassword: string;
}
export declare const XS_AUTHENTICATION_ROUTE: {
    login: string;
    forgotPassword: string;
    forgotPINCode: string;
    help: string;
};
export interface XSAuthenticationStorage {
    token?: string;
    tokenExpiration?: string;
    user?: SHUserPartial;
    username?: string;
    domainID?: string;
    domainName?: string;
    mode?: XSAuthenticationMode;
}
export type XSAuthenticationMode = 'password' | 'pinCode';
