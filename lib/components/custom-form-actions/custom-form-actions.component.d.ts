import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomFormActionsComponent {
    saveBtnLabel: string;
    cancelBtnLabel: string;
    cancelBtnDisabled: boolean;
    saveBtnDisabled: boolean;
    saveBtnClicked: EventEmitter<void>;
    cancelBtnClicked: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFormActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomFormActionsComponent, "custom-form-actions", never, { "saveBtnLabel": { "alias": "saveBtnLabel"; "required": false; }; "cancelBtnLabel": { "alias": "cancelBtnLabel"; "required": false; }; "cancelBtnDisabled": { "alias": "cancelBtnDisabled"; "required": false; }; "saveBtnDisabled": { "alias": "saveBtnDisabled"; "required": false; }; }, { "saveBtnClicked": "saveBtnClicked"; "cancelBtnClicked": "cancelBtnClicked"; }, never, ["[saveBtnIcon]"], true, never>;
}
