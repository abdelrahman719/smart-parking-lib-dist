import { ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface IActions {
    label: string;
    icon?: string;
    callback: (ctx: any) => void;
}
export declare class CustomActionsDropdownComponent {
    private sanitizer;
    private renderer;
    private elRef;
    actions: IActions[];
    context: any;
    horizontalDots: boolean;
    hasActionTemplate: boolean;
    expandSide: 'RIGHT' | 'LEFT';
    expandDirection: 'TOP' | 'BOTTOM';
    actionsPopup?: ElementRef<HTMLDivElement>;
    triggerWrapper?: ElementRef<HTMLDivElement>;
    actionDropdownContainer?: ElementRef<HTMLDivElement>;
    private isAppendedToBody;
    isOpen: import("@angular/core").WritableSignal<boolean>;
    showAnimation: import("@angular/core").WritableSignal<boolean>;
    constructor(sanitizer: DomSanitizer, renderer: Renderer2, elRef: ElementRef);
    sanitizeSvg(svg: string): SafeHtml;
    openDropdown(): void;
    closeDropdown(): void;
    private portalToBody;
    private updatePosition;
    private detachFromBody;
    onClickAction(action: {
        callback: (ctx: any) => void;
    }, event: MouseEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionsDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionsDropdownComponent, "custom-actions-dropdown", never, { "actions": { "alias": "actions"; "required": false; }; "context": { "alias": "context"; "required": false; }; "horizontalDots": { "alias": "horizontalDots"; "required": false; }; "hasActionTemplate": { "alias": "hasActionTemplate"; "required": false; }; "expandSide": { "alias": "expandSide"; "required": false; }; "expandDirection": { "alias": "expandDirection"; "required": false; }; }, {}, never, ["*"], true, never>;
}
