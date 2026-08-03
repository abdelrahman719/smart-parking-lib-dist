import { ToastAction, ToastItem, ToastPosition } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomToastViewportComponent {
    private toast;
    private translate;
    private translation;
    positions: ToastPosition[];
    toastsBy(pos: ToastPosition): ReadonlyArray<ToastItem>;
    posClass(pos: ToastPosition): "toast-top-right" | "toast-top-left" | "toast-bottom-right" | "toast-bottom-left" | "toast-top-center" | "toast-bottom-center";
    /**
     * Per-toast content direction.
     * Explicit toast.rtl (e.g. Arabic samples) wins; otherwise follows live app language.
     */
    toastDir(toast: ToastItem): 'rtl' | 'ltr';
    close(id: string): void;
    onAction(toastId: string, action: ToastAction): void;
    resolveActionLabel(label: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomToastViewportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomToastViewportComponent, "custom-toast-viewport", never, {}, {}, never, never, true, never>;
}
