import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ActivityTimePipe implements PipeTransform {
    transform(value: string | Date, options?: {
        activeNowSeconds?: number;
        locale?: string;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivityTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ActivityTimePipe, "activityTime", true>;
}
