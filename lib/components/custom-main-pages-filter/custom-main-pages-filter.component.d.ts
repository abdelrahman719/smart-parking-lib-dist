import { IDropdownOption } from '../../interfaces';
import * as i0 from "@angular/core";
export interface FilterChange {
    searchText: string;
    selectedIds: any[];
    selections?: Record<string, any[]>;
}
export interface FilterConfigItem {
    key: string;
    placeholder?: string;
    options: IDropdownOption[];
    selected?: any[];
    height?: string;
    enableFilter?: boolean;
    multiSelect?: boolean;
    showClear?: boolean;
    dropdownContainerClass?: string;
    dropdownOptionsClass?: string;
}
export declare class CustomMainPagesFilterComponent {
    dropdownOptions: import("@angular/core").InputSignal<IDropdownOption[]>;
    dropdownSelectedValues: import("@angular/core").InputSignal<any[]>;
    dropdownPlaceholder: import("@angular/core").InputSignal<string>;
    defaultBehaviorFlag: import("@angular/core").InputSignal<boolean>;
    configs: import("@angular/core").InputSignal<FilterConfigItem[]>;
    filterChange: import("@angular/core").OutputEmitterRef<FilterChange>;
    searchText: string;
    private selectedIdsLegacy;
    selectionsMap: import("@angular/core").WritableSignal<Record<string, any[]>>;
    private dropdownChange$;
    private searchChange$;
    constructor();
    ngOnInit(): void;
    onSearch(value: string): void;
    onLegacySelectionChange(ids: any[]): void;
    onConfigSelectionChange(key: string, ids: any[]): void;
    onConfigOneSelectionChange(key: string, obj: any): void;
    private initializeSelectionsFromConfigs;
    private setSelectionForKey;
    private setOneSelectionForKey;
    private buildLegacyPayload;
    private buildConfigPayload;
    private emitChange;
    getPlaceholder(c: FilterConfigItem): string;
    /** Normalize UI flags */
    getEnableFilter(c: FilterConfigItem): boolean;
    getShowClear(c: FilterConfigItem): boolean;
    getHeight(c: FilterConfigItem): string;
    getContainerClass(c: FilterConfigItem): string;
    getOptionsClass(c: FilterConfigItem): string;
    getSelectedForKey(key: string): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesFilterComponent, "custom-main-pages-filter", never, { "dropdownOptions": { "alias": "dropdownOptions"; "required": false; "isSignal": true; }; "dropdownSelectedValues": { "alias": "dropdownSelectedValues"; "required": false; "isSignal": true; }; "dropdownPlaceholder": { "alias": "dropdownPlaceholder"; "required": false; "isSignal": true; }; "defaultBehaviorFlag": { "alias": "defaultBehaviorFlag"; "required": false; "isSignal": true; }; "configs": { "alias": "configs"; "required": false; "isSignal": true; }; }, { "filterChange": "filterChange"; }, never, never, true, never>;
}
