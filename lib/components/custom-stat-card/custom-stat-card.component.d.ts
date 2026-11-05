import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomStatCardComponent {
    /** Existing icon-font classes. Use iconPath for an SVG asset instead. */
    icon: string;
    iconPath: string;
    iconColor: string;
    iconBgColor: string;
    /** Pass translated text; the card does not interpret translation keys. */
    title: string;
    value: string | number | null | undefined;
    titleTemplate?: TemplateRef<unknown>;
    valueTemplate?: TemplateRef<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStatCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStatCardComponent, "custom-stat-card", never, { "icon": { "alias": "icon"; "required": false; }; "iconPath": { "alias": "iconPath"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; "iconBgColor": { "alias": "iconBgColor"; "required": false; }; "title": { "alias": "title"; "required": false; }; "value": { "alias": "value"; "required": false; }; "titleTemplate": { "alias": "titleTemplate"; "required": false; }; "valueTemplate": { "alias": "valueTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
