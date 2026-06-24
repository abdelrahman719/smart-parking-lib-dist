import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TenantPlatformService } from './tenant-platform.service';
import { ITenantUserSingleAuthResult } from '../interfaces/tenant-user.interface';
import { ToastService } from '../../services';
import * as i0 from "@angular/core";
export declare class TenantAuthService {
    private tenantPlatformService;
    private _toast;
    private router;
    private http;
    baseUrl: any;
    constructor(tenantPlatformService: TenantPlatformService, _toast: ToastService, router: Router, http: HttpClient);
    loginTenantUser(): void;
    handleAuthResults(results: ITenantUserSingleAuthResult[]): void;
    clearTenantUserStorage(): void;
    logoutTenantUser(): void;
    private logoutTenant;
    isTenantUserLoggedIn(): boolean;
    hasProductAccess(product: 'ON' | 'OFF'): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantAuthService>;
}
