import * as i0 from "@angular/core";
export type ToastType = 'success' | 'warning' | 'black' | 'error' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
export interface ToastAction {
    label: string;
    variant?: 'primary' | 'secondary';
    closeOnClick?: boolean;
    onClick?: () => void;
}
export interface ToastPayload {
    message: string;
    position?: ToastPosition;
    type?: ToastType;
    duration?: number;
    title?: string;
    details?: string;
    actions?: ToastAction[];
    rtl?: boolean;
    dismissible?: boolean;
}
export interface ToastItem {
    id: string;
    message: string;
    position: ToastPosition;
    type: ToastType;
    duration: number;
    title?: string;
    details?: string;
    actions?: ToastAction[];
    rtl: boolean;
    dismissible: boolean;
    state: 'entering' | 'shown' | 'leaving';
    createdAt: number;
}
export declare class ToastService {
    message: import("@angular/core").WritableSignal<string>;
    type: import("@angular/core").WritableSignal<ToastType>;
    position: import("@angular/core").WritableSignal<ToastPosition>;
    show: import("@angular/core").WritableSignal<boolean>;
    readonly visibleToasts: import("@angular/core").WritableSignal<ToastItem[]>;
    private readonly maxStackPerPosition;
    private readonly leaveMs;
    toast(payload: ToastPayload): void;
    toast(message: string, position?: ToastPosition, ToastType?: ToastType, duration?: number): void;
    close(id: string): void;
    clear(): void;
    private normalizeDuration;
    private inferRtl;
    private getDefaultPosition;
    private resolveLegacyPosition;
    private fromLegacyInput;
    private normalizePayload;
    private pushIntoStack;
    private animateEnter;
    private setState;
    private remove;
    showToast(): void;
    hideToast(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
