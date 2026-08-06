import { ComponentRef, EventEmitter, Injector, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomModalComponent {
    modalTitle: string;
    modalIcon: string;
    modalIconBackground: string;
    modalIconColor: string;
    showTitleMarker: boolean;
    modalTitleMarkerColor: string;
    overlayClickClose: boolean;
    showHeader: boolean;
    hideEvent: EventEmitter<void>;
    closed: EventEmitter<unknown>;
    isVisible: boolean;
    private contentReadySubject;
    readonly contentReady$: import("rxjs").Observable<void>;
    private hostVcRef;
    private dynamicChildRef?;
    set contentHost(vcr: ViewContainerRef | null);
    open(): void;
    close(result?: unknown): void;
    closeInternal(result?: unknown): void;
    onOverlayClick(event: MouseEvent): void;
    get contentInjector(): Injector;
    attachContent<T>(component: Type<T>, injector: Injector): ComponentRef<T>;
    private clearDynamicContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomModalComponent, "modal", never, { "modalTitle": { "alias": "modalTitle"; "required": false; }; "modalIcon": { "alias": "modalIcon"; "required": false; }; "modalIconBackground": { "alias": "modalIconBackground"; "required": false; }; "modalIconColor": { "alias": "modalIconColor"; "required": false; }; "showTitleMarker": { "alias": "showTitleMarker"; "required": false; }; "modalTitleMarkerColor": { "alias": "modalTitleMarkerColor"; "required": false; }; "overlayClickClose": { "alias": "overlayClickClose"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; }, { "hideEvent": "hideEvent"; "closed": "closed"; }, never, ["*"], true, never>;
}
