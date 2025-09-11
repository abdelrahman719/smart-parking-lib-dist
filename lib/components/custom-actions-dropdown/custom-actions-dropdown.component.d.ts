import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface IActions {
    label: string;
    icon?: string;
    callback: (ctx: any) => void;
}
export declare class CustomActionsDropdownComponent {
    private sanitizer;
    actions: IActions[];
    context: any;
    horizontalDots: boolean;
    hasActionTemplate: boolean;
    expandSide: 'RIGHT' | 'LEFT';
    expandDirection: 'TOP' | 'BOTTOM';
    isOpen: boolean;
    constructor(sanitizer: DomSanitizer);
    sanitizeSvg(svg: string): SafeHtml;
    openDropdown(): void;
    closeDropdown(): void;
    onClickAction(action: {
        callback: (ctx: any) => void;
    }, event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionsDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionsDropdownComponent, "custom-actions-dropdown", never, { "actions": { "alias": "actions"; "required": false; }; "context": { "alias": "context"; "required": false; }; "horizontalDots": { "alias": "horizontalDots"; "required": false; }; "hasActionTemplate": { "alias": "hasActionTemplate"; "required": false; }; "expandSide": { "alias": "expandSide"; "required": false; }; "expandDirection": { "alias": "expandDirection"; "required": false; }; }, {}, never, ["*"], true, never>;
}
