import type { TemplateRef } from '@angular/core';
import type { FormGroup } from '@angular/forms';
import type { IDropdownOption, IUserLookup } from '../../../interfaces/components/dropdown.interface';
export type FilterValue = string | number | Date | null | unknown[];
export type FilterSelections = Record<string, FilterValue>;
export type FilterInputType = 'select' | 'multi-select' | 'text' | 'number' | 'date' | 'date-range' | 'custom';
export interface FilterChange {
    searchText: string;
    selectedIds: unknown[];
    selections?: Record<string, unknown[]>;
}
export interface FilterFormBinding {
    parentForm: FormGroup;
    controlName: string;
    name?: string;
    onValueChange?: (value: FilterValue) => void;
    minDate?: Date | null | (() => Date | null);
    maxDate?: Date | null | (() => Date | null);
}
export interface FilterCustomTemplateContext {
    key: string;
    value: FilterValue;
    setValue: (value: FilterValue) => void;
    config: FilterConfigItem;
}
export interface FilterConfigItem {
    key: string;
    label?: string;
    placeholder?: string;
    type?: FilterInputType;
    options?: IDropdownOption[];
    initialValue?: FilterValue;
    selected?: unknown[];
    multiSelect?: boolean;
    searchable?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    required?: boolean;
    loading?: boolean;
    chipLabelFormatter?: (value: unknown, option?: IDropdownOption) => string;
    valueLabelFormatter?: (value: FilterValue, option?: IDropdownOption) => string;
    gridSpan?: 1 | 2;
    width?: string;
    customTemplate?: TemplateRef<FilterCustomTemplateContext>;
    metadata?: Record<string, unknown>;
    formBinding?: FilterFormBinding;
    enableFilter?: boolean;
    showClear?: boolean;
    height?: string;
    dropdownContainerClass?: string;
    dropdownOptionsClass?: string;
    isUserMode?: boolean;
    userOptions?: IUserLookup[];
}
export interface NormalizedFilterConfigItem extends FilterConfigItem {
    type: FilterInputType;
    options: IDropdownOption[];
    initialValue: FilterValue;
    searchable: boolean;
    clearable: boolean;
    disabled: boolean;
    required: boolean;
    loading: boolean;
    gridSpan: 1 | 2;
    height: string;
}
export interface AppliedFilterChip {
    key: string;
    value: unknown;
    label: string;
    removable: boolean;
}
