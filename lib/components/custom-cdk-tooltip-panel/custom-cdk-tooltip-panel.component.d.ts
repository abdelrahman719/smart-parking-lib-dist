import { EventEmitter, TemplateRef } from '@angular/core';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomCdkTooltipPanelComponent {
    translationService: TranslationService;
    customClass: string;
    title: string;
    text: string;
    template?: TemplateRef<unknown>;
    templateContext?: unknown;
    mouseEnter: EventEmitter<void>;
    mouseLeave: EventEmitter<void>;
    constructor(translationService: TranslationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCdkTooltipPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCdkTooltipPanelComponent, "custom-cdk-tooltip-panel", never, { "customClass": { "alias": "customClass"; "required": false; }; "title": { "alias": "title"; "required": false; }; "text": { "alias": "text"; "required": false; }; "template": { "alias": "template"; "required": false; }; "templateContext": { "alias": "templateContext"; "required": false; }; }, { "mouseEnter": "mouseEnter"; "mouseLeave": "mouseLeave"; }, never, never, true, never>;
}
