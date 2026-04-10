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
export declare class CustomTimeInputFormComponent implements OnInit, OnChanges {
    parentForm: FormGroup;
    name: string;
    controlName: string;
    label: string;
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
    hours: number[];
    minutes: number[];
    selectedHour: number | null;
    selectedMinute: number | null;
    private readonly destroyRef;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    toggleDropdown(): void;
    confirmTime(): void;
    isHourDisabled(h: number): boolean;
    isMinuteDisabled(m: number): boolean;
    onHourChange(): void;
    displayTime(): string | null;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputFormComponent, "custom-time-input-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "name": { "alias": "name"; "required": true; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "validation": { "alias": "validation"; "required": false; }; "height": { "alias": "height"; "required": false; }; "stringMode": { "alias": "stringMode"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; "minTime": { "alias": "minTime"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}
