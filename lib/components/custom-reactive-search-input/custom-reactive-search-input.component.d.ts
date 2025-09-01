import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomReactiveSearchInputComponent {
    model: string;
    modelChange: EventEmitter<string>;
    search: EventEmitter<string>;
    headerSearchIcon: import("@angular/core").InputSignal<boolean>;
    containerClass: string;
    inputClass: string;
    inputPlaceholder: string;
    private inputSubject;
    constructor();
    onInputChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomReactiveSearchInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomReactiveSearchInputComponent, "custom-reactive-search-input", never, { "model": { "alias": "model"; "required": false; }; "headerSearchIcon": { "alias": "headerSearchIcon"; "required": false; "isSignal": true; }; "containerClass": { "alias": "containerClass"; "required": true; }; "inputClass": { "alias": "inputClass"; "required": true; }; "inputPlaceholder": { "alias": "inputPlaceholder"; "required": true; }; }, { "modelChange": "modelChange"; "search": "search"; }, never, never, true, never>;
}
