import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IComponentFormError } from "../../interfaces";
import * as i0 from "@angular/core";
export declare class CustomColorInputFormComponent implements OnChanges {
    parentForm: FormGroup;
    controlName: string;
    name: string;
    label: string;
    variant: "picker" | "swatch-hex";
    height: string;
    validation: IComponentFormError[];
    disabled: boolean;
    valueChange: EventEmitter<string>;
    ngOnChanges(changes: SimpleChanges): void;
    onHexChange(event: Event): void;
    onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomColorInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomColorInputFormComponent, "custom-color-input-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "controlName": { "alias": "controlName"; "required": true; }; "name": { "alias": "name"; "required": true; }; "label": { "alias": "label"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "height": { "alias": "height"; "required": false; }; "validation": { "alias": "validation"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
