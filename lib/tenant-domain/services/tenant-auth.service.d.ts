import { Router } from '@angular/router';
import { TenantPlatformService } from './tenant-platform.service';
import { ITenantUserSingleAuthResult } from '../interfaces/tenant-user.interface';
import { ToastService } from '../../services';
import * as i0 from "@angular/core";
export declare class TenantAuthService {
    private tenantPlatformService;
    private _toast;
    private router;
    constructor(tenantPlatformService: TenantPlatformService, _toast: ToastService, router: Router);
    loginTenantUser(): void;
    handleAuthResults(results: ITenantUserSingleAuthResult[]): void;
    clearTenantUserStorage(): void;
    logoutTenantUser(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantAuthService>;
}
