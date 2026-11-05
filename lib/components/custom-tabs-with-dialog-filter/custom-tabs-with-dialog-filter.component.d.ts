import { EventEmitter, TemplateRef } from '@angular/core';
import type { ITabDropdownOption } from '../../interfaces/components/dropdown.interface';
import type { CustomPagesHeaderResultSummary, MainPagesModalFilterChange, MainPagesModalFilterConfigItem } from '../custom-pages-header-with-dialog-filter/custom-pages-header-with-dialog-filter.models';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomTabsWithDialogFilterComponent {
    translationService: TranslationService;
    tabsList: import("@angular/core").InputSignal<ITabDropdownOption[]>;
    selectedTab: import("@angular/core").InputSignal<ITabDropdownOption>;
    color: import("@angular/core").InputSignal<string>;
    colorSelected: import("@angular/core").InputSignal<string>;
    tabTemplates: import("@angular/core").InputSignal<{
        [key: string]: TemplateRef<any>;
    }>;
    hideFilter: import("@angular/core").InputSignal<boolean>;
    defaultBehaviorFlag: import("@angular/core").InputSignal<boolean>;
    configs: import("@angular/core").InputSignal<MainPagesModalFilterConfigItem[]>;
    hasFiltered: import("@angular/core").InputSignal<boolean>;
    externalFiltersHasValue: import("@angular/core").InputSignal<boolean>;
    searchInputPlaceholder: import("@angular/core").InputSignal<string>;
    validateNumber: import("@angular/core").InputSignal<boolean>;
    modalTitle: import("@angular/core").InputSignal<string>;
    showModalTitleMarker: import("@angular/core").InputSignal<boolean>;
    modalTitleMarkerColor: import("@angular/core").InputSignal<string>;
    resultSummary: import("@angular/core").InputSignal<CustomPagesHeaderResultSummary | null>;
    tabSelected: EventEmitter<ITabDropdownOption>;
    filterChange: EventEmitter<MainPagesModalFilterChange>;
    filterReset: EventEmitter<boolean>;
    readonly activeTab: import("@angular/core").Signal<ITabDropdownOption>;
    selectTab(tab: ITabDropdownOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTabsWithDialogFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTabsWithDialogFilterComponent, "custom-tabs-with-dialog-filter", never, { "tabsList": { "alias": "tabsList"; "required": true; "isSignal": true; }; "selectedTab": { "alias": "selectedTab"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "colorSelected": { "alias": "colorSelected"; "required": false; "isSignal": true; }; "tabTemplates": { "alias": "tabTemplates"; "required": false; "isSignal": true; }; "hideFilter": { "alias": "hideFilter"; "required": false; "isSignal": true; }; "defaultBehaviorFlag": { "alias": "defaultBehaviorFlag"; "required": false; "isSignal": true; }; "configs": { "alias": "configs"; "required": false; "isSignal": true; }; "hasFiltered": { "alias": "hasFiltered"; "required": false; "isSignal": true; }; "externalFiltersHasValue": { "alias": "externalFiltersHasValue"; "required": false; "isSignal": true; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; "isSignal": true; }; "validateNumber": { "alias": "validateNumber"; "required": false; "isSignal": true; }; "modalTitle": { "alias": "modalTitle"; "required": false; "isSignal": true; }; "showModalTitleMarker": { "alias": "showModalTitleMarker"; "required": false; "isSignal": true; }; "modalTitleMarkerColor": { "alias": "modalTitleMarkerColor"; "required": false; "isSignal": true; }; "resultSummary": { "alias": "resultSummary"; "required": false; "isSignal": true; }; }, { "tabSelected": "tabSelected"; "filterChange": "filterChange"; "filterReset": "filterReset"; }, never, never, true, never>;
}
