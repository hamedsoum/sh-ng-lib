export interface XSAuthenticationPINCodeRequest extends XSAuthenticationRequest {    username?: string;    password?: string;    pinCode: string;}export interface SHAuthenticationUsernamePasswordRequest extends XSAuthenticationRequest {    username: string;    password: string;}export interface XSAuthenticationRequest {    domainID?: string;}export type XSAuthenticationMode = 'password' | 'pinCode';