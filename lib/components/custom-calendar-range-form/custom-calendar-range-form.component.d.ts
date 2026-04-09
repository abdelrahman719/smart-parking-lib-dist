import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface DateRange {
    fromDate: Date | null;
    toDate: Date | null;
}
/** Shape accepted as input and emitted as output when stringMode is true */
export interface DateRangeString {
    fromDate: string | null;
    toDate: string | null;
}
export declare class CustomCalendarRangeFormComponent implements OnInit, OnChanges {
    private translationService;
    label: string;
    placeholder: string;
    filterDesign: boolean;
    labelClass: string;
    calendarPopUpClass: string;
    calendarInputClass: string;
    calendarContainerClass: string;
    componentClass: string;
    minDate: Date | null;
    maxDate: Date | null;
    controlName: string;
    parentForm: FormGroup;
    validation: IComponentFormError[];
    name: string;
    disabled: boolean;
    height: string;
    /**
     * Optional direct value binding. Accepts DateRange, DateRangeString, or null.
     * When set (or changed) it patches the form control and updates the display.
     * Works with both stringMode: true and stringMode: false.
     *
     * Example:
     *   [value]="{ fromDate: '2026-04-07T22:40:40.820', toDate: '2026-04-14T00:00:00.000' }"
     */
    value: DateRange | DateRangeString | null;
    /**
     * When true the component accepts / emits strings in the format
     * "2026-04-07T22:40:40.820" instead of Date objects.
     * The form control value is also kept as DateRangeString in this mode.
     */
    stringMode: boolean;
    /** Labels for the action buttons */
    applyLabel: string;
    cancelLabel: string;
    /** Emits DateRange (Date objects) or DateRangeString depending on stringMode */
    valueChange: EventEmitter<DateRange | DateRangeString>;
    showCalendarForm: boolean;
    currentMonth: Date;
    days: Date[];
    /**
     * Committed value bound to the form control.
     * Both properties equal the same Date when only one day is selected.
     */
    rangeValue: DateRange;
    tempFromDate: Date | null;
    tempToDate: Date | null;
    hoveredDate: Date | null;
    constructor(translationService: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private applyValueInput;
    /**
     * Writes the value into the form control in the correct shape
     * (DateRangeString when stringMode, DateRange otherwise).
     */
    private patchControl;
    get weekdays(): string[];
    toggleCalendar(): void;
    cancelSelection(): void;
    applySelection(): void;
    prevMonth(): void;
    nextMonth(): void;
    generateCalendar(): void;
    selectRangeDate(date: Date): void;
    onDayHover(date: Date): void;
    onDayLeave(): void;
    isRangeStart(date: Date): boolean;
    isRangeEnd(date: Date): boolean;
    isInRange(date: Date): boolean;
    /**
     * True only when a single day is selected (from === to or only one chosen).
     * Used to render a round circle without the trailing background band.
     */
    isSingleSelected(date: Date): boolean;
    isHovered(date: Date): boolean;
    isCurrentMonth(date: Date): boolean;
    /**
     * Disable any day that is:
     *  - before global minDate / after global maxDate
     *  - before tempFromDate when it is set (prevents selecting end < start)
     */
    isDisabledRange(date: Date): boolean;
    formatDisplayRange(): string;
    getMonthName(): string;
    getYear(): number;
    containRequiredError(): boolean;
    private isSameDay;
    private normalizeToMidnightUTC;
    /**
     * Parses any incoming control value into an internal DateRange.
     * Handles: null, DateRange (Date objects), DateRangeString (ISO strings).
     */
    private coerceToDateRange;
    /**
     * Accepts either a Date object or an ISO-like string
     * e.g. "2026-04-07T22:40:40.820" and returns a Date.
     */
    private parseDate;
    /**
     * Formats a Date back to "YYYY-MM-DDTHH:mm:ss.SSS" in LOCAL time
     * (no UTC shift) so the round-trip stays consistent with the input format.
     */
    private toLocalISOString;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCalendarRangeFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCalendarRangeFormComponent, "custom-calendar-range-form", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "filterDesign": { "alias": "filterDesign"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "calendarPopUpClass": { "alias": "calendarPopUpClass"; "required": false; }; "calendarInputClass": { "alias": "calendarInputClass"; "required": false; }; "calendarContainerClass": { "alias": "calendarContainerClass"; "required": false; }; "componentClass": { "alias": "componentClass"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "controlName": { "alias": "controlName"; "required": true; }; "parentForm": { "alias": "parentForm"; "required": true; }; "validation": { "alias": "validation"; "required": true; }; "name": { "alias": "name"; "required": true; }; "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "value": { "alias": "value"; "required": false; }; "stringMode": { "alias": "stringMode"; "required": false; }; "applyLabel": { "alias": "applyLabel"; "required": false; }; "cancelLabel": { "alias": "cancelLabel"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
