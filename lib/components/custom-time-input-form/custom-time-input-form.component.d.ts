import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import * as i0 from "@angular/core";
export interface ITimeObject {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}
export declare class CustomTimeInputFormComponent implements OnInit {
    parentForm: FormGroup;
    name: string;
    controlName: string;
    label: string;
    labelClass: string;
    inputClass: string;
    validation: IComponentFormError[];
    defaultTime: ITimeObject | null;
    minTime: ITimeObject | null;
    height: string;
    timeChange: EventEmitter<ITimeObject>;
    showErrors: import("@angular/core").WritableSignal<boolean>;
    dropdownOpen: import("@angular/core").WritableSignal<boolean>;
    hours: number[];
    minutes: number[];
    selectedHour: number | null;
    selectedMinute: number | null;
    ngOnInit(): void;
    toggleDropdown(): void;
    private extractValueFromObject;
    setFormValue(): void;
    confirmTime(): void;
    isHourDisabled(h: number): boolean;
    isMinuteDisabled(m: number): boolean;
    onHourChange(): void;
    displayTime(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputFormComponent, "custom-time-input-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "name": { "alias": "name"; "required": true; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "validation": { "alias": "validation"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; "minTime": { "alias": "minTime"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}
