import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface VehiclePlateValue {
    vehiclePlateNumber: string;
    vehiclePlateCharacter: string;
}
export interface VehiclePlateAssets {
    emblem: string;
    smallEmblem: string;
    countryLetters: readonly string[];
}
type PlateField = keyof VehiclePlateValue;
export declare class CustomVehiclePlateNumberComponent implements ControlValueAccessor {
    readonlyMode: boolean;
    label: string;
    assets?: VehiclePlateAssets;
    blur: EventEmitter<void>;
    enterKey: EventEmitter<void>;
    readonly groups: readonly [{
        readonly field: "vehiclePlateNumber";
        readonly length: 4;
        readonly inputMode: "numeric";
    }, {
        readonly field: "vehiclePlateCharacter";
        readonly length: 3;
        readonly inputMode: "text";
    }];
    readonly slots: Record<PlateField, string[]>;
    disabled: boolean;
    private onChange;
    private onTouched;
    writeValue(value: VehiclePlateValue | null): void;
    registerOnChange(fn: (value: VehiclePlateValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    preview(field: PlateField, char: string): string;
    onBlur(): void;
    onInput(field: PlateField, index: number, input: HTMLInputElement): void;
    onPaste(field: PlateField, index: number, input: HTMLInputElement, event: ClipboardEvent): void;
    onKeydown(index: number, input: HTMLInputElement, event: KeyboardEvent): void;
    private validCharacters;
    private focusSlot;
    private emitValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomVehiclePlateNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomVehiclePlateNumberComponent, "custom-vehicle-plate-number", never, { "readonlyMode": { "alias": "readonlyMode"; "required": false; }; "label": { "alias": "label"; "required": false; }; "assets": { "alias": "assets"; "required": false; }; }, { "blur": "blur"; "enterKey": "enterKey"; }, never, never, true, never>;
}
export {};
