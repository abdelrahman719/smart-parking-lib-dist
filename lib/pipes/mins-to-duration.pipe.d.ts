import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MinsToDurationPipe implements PipeTransform {
    private labels;
    transform(totalMinutes: number, lang?: 'en' | 'ar'): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MinsToDurationPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MinsToDurationPipe, "minsToDuration", true>;
}
