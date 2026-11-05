import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import * as i0 from "@angular/core";
export interface ITimeObject {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}
/** "HH:mm:ss" — e.g. "17:30:00" */
export type TimeString = string;
export type TimeHourFormat = '12' | '24';
type TimePart = 'hour' | 'minute';
type Meridiem = 'AM' | 'PM';
export declare class CustomTimeInputFormComponent implements OnInit, OnChanges {
    parentForm: FormGroup;
    name: string;
    controlName: string;
    label: string;
    placeholder: string;
    labelClass: string;
    inputClass: string;
    validation: IComponentFormError[];
    height: string;
    /**
     * When true the component reads / writes / emits "HH:mm:ss" strings
     * (e.g. "17:30:00") instead of ITimeObject.
     * Default is false — keeps full backward compatibility.
     */
    stringMode: boolean;
    /**
     * Default value. Accepts ITimeObject or "HH:mm:ss" string.
     * The component resolves it regardless of stringMode.
     */
    defaultTime: ITimeObject | TimeString | null;
    /**
     * Minimum allowed time. Accepts ITimeObject or "HH:mm:ss" string.
     */
    minTime: ITimeObject | TimeString | null;
    hourFormat: TimeHourFormat;
    minuteStep: number;
    /**
     * Optional direct value binding — mirrors the range calendar pattern.
     * Accepts ITimeObject or "HH:mm:ss" string, patches the form control
     * and updates the display. Reacts to changes via ngOnChanges.
     */
    value: ITimeObject | TimeString | null;
    /** Emits ITimeObject or "HH:mm:ss" string depending on stringMode */
    timeChange: EventEmitter<string | ITimeObject>;
    showErrors: import("@angular/core").WritableSignal<boolean>;
    dropdownOpen: import("@angular/core").WritableSignal<boolean>;
    selectedHour: number | null;
    selectedMinute: number | null;
    selectedMeridiem: Meridiem;
    private readonly destroyRef;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    toggleDropdown(): void;
    closeDropdown(): void;
    commitTime(): void;
    confirmTime(): void;
    increment(part: TimePart): void;
    decrement(part: TimePart): void;
    toggleMeridiem(): void;
    onManualHourInput(event: Event): void;
    onManualMinuteInput(event: Event): void;
    onManualInputBlur(part: TimePart): void;
    selectManualValue(event: Event): void;
    isHourDisabled(h: number): boolean;
    isMinuteDisabled(m: number): boolean;
    onHourChange(): void;
    displayTime(): string | null;
    displayHour(): string;
    displayMinute(): string;
    private applyValueInput;
    /**
     * Writes the value into the form control in the correct shape.
     * Always normalises to the active mode (string vs object) with emitEvent: false
     * to avoid a valueChanges loop.
     */
    private patchControl;
    /**
     * Converts ITimeObject | "HH:mm:ss" | "HH:mm" | null → ITimeObject | null.
     * Safe to call with anything — returns null for invalid / empty input.
     */
    private coerceToTimeObject;
    /**
     * Formats hour + minute (+ optional second) → "HH:mm:ss"
     */
    private toTimeString;
    private setSelectedTime;
    private normalizeSelectedHour;
    private nextHour;
    private nextMinute;
    private normalizeManualNumber;
    private clampHour;
    private clamp12Hour;
    private clampMinute;
    private getMinuteStep;
    private toDisplayHour;
    private pad;
    private applyMinTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputFormComponent, "custom-time-input-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "name": { "alias": "name"; "required": true; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "validation": { "alias": "validation"; "required": false; }; "height": { "alias": "height"; "required": false; }; "stringMode": { "alias": "stringMode"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; "minTime": { "alias": "minTime"; "required": false; }; "hourFormat": { "alias": "hourFormat"; "required": false; }; "minuteStep": { "alias": "minuteStep"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}
export {};
