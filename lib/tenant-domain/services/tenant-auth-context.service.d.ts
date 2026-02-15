import { ApplicationType, ITenantTokenData } from '../interfaces/tenant-user.interface';
import { IUserData } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class TenantAuthContextService {
    tenantTokens$: import("@angular/core").WritableSignal<ITenantTokenData[]>;
    currentApplicationType$: import("@angular/core").WritableSignal<ApplicationType | null>;
    tenantUser$: import("@angular/core").WritableSignal<IUserData | null>;
    constructor();
    /**
     * Save tenant tokens array to local storage and update signals
     */
    saveTenantTokens(tokens: ITenantTokenData[], user: IUserData): void;
    /**
     * Get token for specific application type
     */
    getTenantTokenByApp(applicationType: ApplicationType): ITenantTokenData | null;
    /**
     * Get all tenant tokens
     */
    getAllTenantTokens(): ITenantTokenData[];
    /**
     * Set current application type context
     */
    setCurrentApplicationType(applicationType: ApplicationType): void;
    /**
     * Get current application type
     */
    getCurrentApplicationType(): ApplicationType | null;
    /**
     * Get tenant user data
     */
    getTenantUser(): IUserData | null;
    /**
     * Clear all tenant data
     */
    clearTenantData(): void;
    /**
     * Load tenant data from localStorage on initialization
     */
    private loadFromStorage;
    /**
     * Check if user has access to specific application type
     */
    hasAccessToApplication(applicationType: ApplicationType): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantAuthContextService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantAuthContextService>;
}
