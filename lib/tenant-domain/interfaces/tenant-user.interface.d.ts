export type ApplicationType = 'OFF' | 'ON';
export interface ITenantUserLoginData {
    username?: string;
    applications: ApplicationType[];
    offStreetUserId?: number;
    onStreetUserId?: number;
    offStreetEmail?: string;
    onStreetEmail?: string;
}
export interface ITenantUserSingleAuthResult {
    success: boolean;
    application: ApplicationType;
    token?: string;
    refreshToken?: string;
    userId?: number;
    user?: any;
    email?: string;
    error?: any;
}
