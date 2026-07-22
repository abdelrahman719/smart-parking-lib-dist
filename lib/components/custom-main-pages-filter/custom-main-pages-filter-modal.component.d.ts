import { OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownOption, IUserLookup } from '../../interfaces';
import { FilterCustomTemplateContext, FilterSelections, FilterValue, NormalizedFilterConfigItem } from './custom-main-pages-filter.models';
import * as i0 from "@angular/core";
export interface FilterModalCloseResult {
    action: 'apply';
    values: FilterSelections;
}
export declare class CustomMainPagesFilterModalComponent implements OnChanges {
    configs: readonly NormalizedFilterConfigItem[];
    draftValues: FilterSelections;
    private readonly fb;
    private readonly modalRef;
    readonly internalForm: FormGroup<{
        [x: string]: FormControl<FilterValue>;
    }>;
    readonly draft: import("@angular/core").WritableSignal<FilterSelections>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesFilterModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesFilterModalComponent, "custom-main-pages-filter-modal", never, { "configs": { "alias": "configs"; "required": false; }; "draftValues": { "alias": "draftValues"; "required": false; }; }, {}, never, never, true, never>;
}
