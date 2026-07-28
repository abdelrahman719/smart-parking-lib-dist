import { OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import type { IDropdownOption, IUserLookup } from '../../../../interfaces/components/dropdown.interface';
import type { FilterCustomTemplateContext, FilterSelections, FilterValue, NormalizedFilterConfigItem } from '../custom-main-pages-modal-filter.models';
import * as i0 from "@angular/core";
export interface FilterModalCloseResult {
    action: 'apply';
    searchText: string;
    values: FilterSelections;
}
export declare class CustomMainPagesModalFilterDialogComponent implements OnChanges {
    configs: readonly NormalizedFilterConfigItem[];
    draftValues: FilterSelections;
    searchText: string;
    searchInputPlaceholder: string;
    validateNumber: boolean;
    private readonly fb;
    private readonly modalRef;
    readonly internalForm: FormGroup<{
        [x: string]: FormControl<FilterValue>;
    }>;
    readonly draft: import("@angular/core").WritableSignal<FilterSelections>;
    readonly draftSearchText: import("@angular/core").WritableSignal<string>;
    readonly hasConfigs: import("@angular/core").Signal<boolean>;
    ngOnChanges(changes: SimpleChanges): void;
    getControlName(config: NormalizedFilterConfigItem): string;
    getRangeControlName(config: NormalizedFilterConfigItem, index: 0 | 1): string;
    getForm(config: NormalizedFilterConfigItem): FormGroup;
    getMinDate(config: NormalizedFilterConfigItem): Date | null;
    getMaxDate(config: NormalizedFilterConfigItem): Date | null;
    getValue(key: string): FilterValue;
    getArrayValue(key: string): unknown[];
    getRangeValue(key: string, index: 0 | 1): Date | null;
    onSingleSelectChange(config: NormalizedFilterConfigItem, option: IDropdownOption | IUserLookup | null): void;
    onMultiSelectChange(config: NormalizedFilterConfigItem, value: unknown[]): void;
    onInputChange(config: NormalizedFilterConfigItem, value: string): void;
    onDateChange(config: NormalizedFilterConfigItem, value: Date | null): void;
    onDateRangeChange(config: NormalizedFilterConfigItem, index: 0 | 1, value: Date | null): void;
    onSearchChange(value: string): void;
    resetDraft(): void;
    apply(): void;
    cancel(): void;
    templateContext(config: NormalizedFilterConfigItem): FilterCustomTemplateContext;
    private ensureInternalControls;
    private loadDraft;
    private setValue;
    private patchRangeControls;
    private patchBoundControl;
    private hasInvalidControls;
    private markControlsTouched;
    private emptyValueFor;
    private normalizeValue;
    private toNumberValue;
    private cloneSelections;
    private cloneValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesModalFilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesModalFilterDialogComponent, "custom-main-pages-modal-filter-dialog", never, { "configs": { "alias": "configs"; "required": false; }; "draftValues": { "alias": "draftValues"; "required": false; }; "searchText": { "alias": "searchText"; "required": false; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; }; "validateNumber": { "alias": "validateNumber"; "required": false; }; }, {}, never, never, true, never>;
}
