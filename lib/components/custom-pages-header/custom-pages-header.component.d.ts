import { EventEmitter } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class CustomPagesHeaderComponent {
    headerTitle: import("@angular/core").InputSignal<string>;
    btnTitle: import("@angular/core").InputSignal<string>;
    hasTabs: import("@angular/core").InputSignal<boolean>;
    listCounter: import("@angular/core").InputSignal<number>;
    pageTabs: import("@angular/core").InputSignal<ITabDropdownOption[]>;
    selectedTab: import("@angular/core").WritableSignal<ITabDropdownOption>;
    tabSelected: EventEmitter<ITabDropdownOption>;
    addAction: EventEmitter<any>;
    constructor();
    selectTab(tab: ITabDropdownOption): void;
    onAddClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPagesHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPagesHeaderComponent, "custom-pages-header", never, { "headerTitle": { "alias": "headerTitle"; "required": false; "isSignal": true; }; "btnTitle": { "alias": "btnTitle"; "required": false; "isSignal": true; }; "hasTabs": { "alias": "hasTabs"; "required": false; "isSignal": true; }; "listCounter": { "alias": "listCounter"; "required": false; "isSignal": true; }; "pageTabs": { "alias": "pageTabs"; "required": false; "isSignal": true; }; }, { "tabSelected": "tabSelected"; "addAction": "addAction"; }, never, never, true, never>;
}
