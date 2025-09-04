import { IDropdownOption } from '../../interfaces';
import * as i0 from "@angular/core";
export interface FilterChange {
    searchText: string;
    selectedIds: any[];
}
export declare class CustomMainPagesFilterComponent {
    dropdownOptions: import("@angular/core").InputSignal<IDropdownOption[]>;
    dropdownSelectedValues: import("@angular/core").InputSignal<any[]>;
    dropdownPlaceholder: import("@angular/core").InputSignal<string>;
    filterChange: import("@angular/core").OutputEmitterRef<FilterChange>;
    searchText: string;
    selectedIds: any[];
    private dropdownChange$;
    constructor();
    onSearch(value: string): void;
    onSelectionChange(ids: any[]): void;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesFilterComponent, "custom-main-pages-filter", never, { "dropdownOptions": { "alias": "dropdownOptions"; "required": false; "isSignal": true; }; "dropdownSelectedValues": { "alias": "dropdownSelectedValues"; "required": false; "isSignal": true; }; "dropdownPlaceholder": { "alias": "dropdownPlaceholder"; "required": false; "isSignal": true; }; }, { "filterChange": "filterChange"; }, never, never, true, never>;
}
