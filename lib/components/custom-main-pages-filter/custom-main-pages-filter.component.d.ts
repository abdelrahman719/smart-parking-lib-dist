import { TemplateRef } from '@angular/core';
import { IDropdownOption } from '../../interfaces';
import { AppliedFilterChip, FilterChange, FilterConfigItem, FilterSelections, NormalizedFilterConfigItem } from './custom-main-pages-filter.models';
import * as i0 from "@angular/core";
interface FilterState {
    searchText: string;
    selectedIdsLegacy: unknown[];
    selectionsMap: FilterSelections;
}
export declare class CustomMainPagesFilterComponent {
    /** @deprecated Use configs instead. */
    dropdownOptions: import("@angular/core").InputSignal<IDropdownOption[]>;
    /** @deprecated Use configs.initialValue instead. */
    dropdownSelectedValues: import("@angular/core").InputSignal<unknown[]>;
    /** @deprecated Use configs.placeholder instead. */
    dropdownPlaceholder: import("@angular/core").InputSignal<string>;
    searchInputPlaceholder: import("@angular/core").InputSignal<string>;
    defaultBehaviorFlag: import("@angular/core").InputSignal<boolean>;
    configs: import("@angular/core").InputSignal<FilterConfigItem[]>;
    /** @deprecated Use configs with gridSpan/customTemplate instead. */
    moreConfigs: import("@angular/core").InputSignal<FilterConfigItem[]>;
    /** @deprecated Filters are shown in a modal. */
    showMore: import("@angular/core").InputSignal<boolean>;
    validateNumber: import("@angular/core").InputSignal<boolean>;
    externalFiltersHasValue: import("@angular/core").InputSignal<boolean>;
    hasFiltered: import("@angular/core").InputSignal<boolean>;
    modalTitle: import("@angular/core").InputSignal<string>;
    customTemplates: import("@angular/core").InputSignal<Record<string, TemplateRef<unknown>>>;
    filterChange: import("@angular/core").OutputEmitterRef<FilterChange>;
    filterReset: import("@angular/core").OutputEmitterRef<boolean>;
    private readonly modalService;
    readonly appliedState: import("@angular/core").WritableSignal<FilterState>;
    readonly initialState: import("@angular/core").WritableSignal<FilterState>;
    readonly normalizedConfigs: import("@angular/core").Signal<NormalizedFilterConfigItem[]>;
    readonly hasAnyFilterValue: import("@angular/core").Signal<boolean>;
    readonly hasChangedFromInitial: import("@angular/core").Signal<boolean>;
    readonly appliedChips: import("@angular/core").Signal<AppliedFilterChip[]>;
    readonly shouldDisableReset: import("@angular/core").Signal<boolean>;
    constructor();
    onSearch(value: string): void;
    openFilters(): Promise<void>;
    applyDraft(values: FilterSelections): void;
    removeChip(chip: AppliedFilterChip): void;
    resetFilters(): void;
    onDropdownCleared(): void;
    private emitAppliedChange;
    private stateFromExternalInputs;
    private normalizeConfigs;
    private normalizeConfig;
    private hasExplicitInitialValue;
    private normalizeSelections;
    private toPayloadSelections;
    private buildChipsForConfig;
    private labelForValue;
    private syncFormBindings;
    private emptyValueFor;
    private emptyValueByType;
    private hasValue;
    private toArray;
    private selectionsEqual;
    private valuesEqual;
    private arraysEqual;
    private cloneState;
    private cloneSelections;
    private cloneValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesFilterComponent, "custom-main-pages-filter", never, { "dropdownOptions": { "alias": "dropdownOptions"; "required": false; "isSignal": true; }; "dropdownSelectedValues": { "alias": "dropdownSelectedValues"; "required": false; "isSignal": true; }; "dropdownPlaceholder": { "alias": "dropdownPlaceholder"; "required": false; "isSignal": true; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; "isSignal": true; }; "defaultBehaviorFlag": { "alias": "defaultBehaviorFlag"; "required": false; "isSignal": true; }; "configs": { "alias": "configs"; "required": false; "isSignal": true; }; "moreConfigs": { "alias": "moreConfigs"; "required": false; "isSignal": true; }; "showMore": { "alias": "showMore"; "required": false; "isSignal": true; }; "validateNumber": { "alias": "validateNumber"; "required": false; "isSignal": true; }; "externalFiltersHasValue": { "alias": "externalFiltersHasValue"; "required": false; "isSignal": true; }; "hasFiltered": { "alias": "hasFiltered"; "required": false; "isSignal": true; }; "modalTitle": { "alias": "modalTitle"; "required": false; "isSignal": true; }; "customTemplates": { "alias": "customTemplates"; "required": false; "isSignal": true; }; }, { "filterChange": "filterChange"; "filterReset": "filterReset"; }, never, ["[extraFilters]", "[extraFiltersMore]"], true, never>;
}
export type { AppliedFilterChip, FilterChange, FilterConfigItem, FilterCustomTemplateContext, FilterInputType, FilterSelections, FilterValue, } from './custom-main-pages-filter.models';
