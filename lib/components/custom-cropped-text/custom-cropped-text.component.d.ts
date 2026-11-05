import { CustomCdkTooltipPosition } from '../../services/custom-cdk-overlay.service';
import * as i0 from "@angular/core";
export declare class CustomCroppedTextComponent {
    value: string | null | undefined;
    maxLength: number;
    fallback: string;
    tooltipPosition: CustomCdkTooltipPosition;
    textClass: string;
    get displayValue(): string;
    get isCropped(): boolean;
    get textClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCroppedTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCroppedTextComponent, "custom-cropped-text", never, { "value": { "alias": "value"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "fallback": { "alias": "fallback"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "textClass": { "alias": "textClass"; "required": false; }; }, {}, never, never, true, never>;
}
