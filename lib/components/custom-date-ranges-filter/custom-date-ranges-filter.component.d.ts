import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError, IDropdownOption } from '../../interfaces';
import * as i0 from "@angular/core";
export interface IDateRangeFilterValue {
    duration: string | null;
    fromDate: Date | null;
    toDate: Date | null;
}
export declare class CustomDateRangesFilterComponent implements OnInit, OnChanges {
    private readonly allTimesDurationId;
    parentForm: FormGroup;
    durationControlName: string;
    fromDateControlName: string;
    toDateControlName: string;
    durationOptions: IDropdownOption[];
    durationPlaceholder: string;
    fromPlaceholder: string;
    toPlaceholder: string;
    triggerPlaceholder: string;
    expandSide: 'RIGHT' | 'LEFT';
    expandDirection: 'TOP' | 'BOTTOM';
    height: string;
    durationValidation: IComponentFormError[];
    fromDateValidation: IComponentFormError[];
    toDateValidation: IComponentFormError[];
    dateRangeChange: EventEmitter<IDateRangeFilterValue>;
    private durationDropdown?;
    private fromDateCalendar?;
    private toDateCalendar?;
    private readonly translationService;
    private readonly destroyRef;
    protected readonly fromDateValue: import("@angular/core").WritableSignal<Date | null>;
    protected readonly toDateValue: import("@angular/core").WritableSignal<Date | null>;
    protected readonly selectedDurationId: import("@angular/core").WritableSignal<string | null>;
    protected readonly toDateMinDate: import("@angular/core").Signal<Date | null>;
    protected readonly triggerLabel: import("@angular/core").Signal<string>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    protected onDurationChange(option: IDropdownOption | null): void;
    protected onFromDateChange(date: Date | null): void;
    protected onToDateChange(date: Date | null): void;
    protected onInnerPopupToggle(openedPopup: 'duration' | 'fromDate' | 'toDate', isOpen: boolean): void;
    private syncFromForm;
    private setDefaultDurationIfEmpty;
    private emitRangeChange;
    private findDurationOption;
    private findMatchingDuration;
    private isSameDay;
    private localizeOption;
    private formatDisplayDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateRangesFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDateRangesFilterComponent, "custom-date-ranges-filter", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "durationControlName": { "alias": "durationControlName"; "required": false; }; "fromDateControlName": { "alias": "fromDateControlName"; "required": false; }; "toDateControlName": { "alias": "toDateControlName"; "required": false; }; "durationOptions": { "alias": "durationOptions"; "required": false; }; "durationPlaceholder": { "alias": "durationPlaceholder"; "required": false; }; "fromPlaceholder": { "alias": "fromPlaceholder"; "required": false; }; "toPlaceholder": { "alias": "toPlaceholder"; "required": false; }; "triggerPlaceholder": { "alias": "triggerPlaceholder"; "required": false; }; "expandSide": { "alias": "expandSide"; "required": false; }; "expandDirection": { "alias": "expandDirection"; "required": false; }; "height": { "alias": "height"; "required": false; }; "durationValidation": { "alias": "durationValidation"; "required": false; }; "fromDateValidation": { "alias": "fromDateValidation"; "required": false; }; "toDateValidation": { "alias": "toDateValidation"; "required": false; }; }, { "dateRangeChange": "dateRangeChange"; }, never, never, true, never>;
}
export declare function calculateDatesFromDuration(durationId: string): {
    from: Date;
    to: Date;
};
