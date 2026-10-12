import { PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translate/translation.service';
import { type ActivityTimeFormat, type ActivityTimeMode } from '../utilities/activity-time.util';
import * as i0 from "@angular/core";
export declare class ActivityTimePipe implements PipeTransform {
    private translation;
    constructor(translation: TranslationService);
    transform(value: string | Date | number | null | undefined, lang?: string, mode?: ActivityTimeMode, format?: ActivityTimeFormat): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivityTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ActivityTimePipe, "activityTime", true>;
}
