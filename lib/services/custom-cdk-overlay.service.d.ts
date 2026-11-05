import { FlexibleConnectedPositionStrategyOrigin, ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { CustomCdkTooltipPanelComponent } from '../components/custom-cdk-tooltip-panel/custom-cdk-tooltip-panel.component';
import * as i0 from "@angular/core";
export type CustomCdkTooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end';
export interface CustomCdkOverlayOpenConfig {
    origin: FlexibleConnectedPositionStrategyOrigin;
    viewContainerRef: ViewContainerRef;
    text?: string;
    title?: string;
    customClass?: string;
    panelClass?: string | string[];
    position?: CustomCdkTooltipPosition;
    positions?: ConnectedPosition[];
    template?: TemplateRef<unknown>;
    templateContext?: unknown;
}
export interface CustomCdkOverlayRef {
    overlayRef: OverlayRef;
    panelRef: ComponentRef<CustomCdkTooltipPanelComponent>;
}
export declare class CustomCdkOverlayService {
    private readonly overlay;
    private activeOverlayRef?;
    constructor(overlay: Overlay);
    open(config: CustomCdkOverlayOpenConfig): CustomCdkOverlayRef;
    close(overlayRef?: OverlayRef): void;
    mapPositions(position: CustomCdkTooltipPosition): ConnectedPosition[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCdkOverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomCdkOverlayService>;
}
