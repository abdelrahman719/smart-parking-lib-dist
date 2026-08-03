import { EventEmitter } from '@angular/core';
import { IPageChangeEvent } from '../../interfaces';
import { LoadingService, TranslationService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomPaginationComponent {
    maxVisiblePages: number;
    page: number;
    pageSize: number;
    private _totalCount;
    set totalCount(value: number);
    get totalCount(): number;
    pageChange: EventEmitter<IPageChangeEvent>;
    baseValue: number;
    pageSizeOptions: import("@angular/core").WritableSignal<number[]>;
    totalPages: import("@angular/core").WritableSignal<number[]>;
    hideTotalCount: import("@angular/core").InputSignal<boolean>;
    showPageSize: boolean;
    translationService: TranslationService;
    loadingService: LoadingService;
    constructor();
    ngOnInit(): void;
    calculateTotalPages(): void;
    /** Total number of pages (0 when there is nothing to page through). */
    get pageCount(): number;
    /**
     * The page number shown to the user. `page` is 0-based in and out of the
     * component, the displayed numbers are 1-based.
     */
    get currentPage(): number;
    /** Show the standalone "1" when the visible window does not start at page 1. */
    get showFirstPageNumber(): boolean;
    /** Show "..." before the window when at least one page is hidden after page 1. */
    get showStartEllipsis(): boolean;
    /** Show the standalone last page number when the window stops before it. */
    get showLastPageNumber(): boolean;
    /** Show "..." after the window when at least one page is hidden before the last. */
    get showEndEllipsis(): boolean;
    generatePageSizeOptions(): void;
    prevPage(): void;
    nextPage(): void;
    /** `page` is the 0-based index, i.e. the displayed number minus one. */
    changePage(page: number): void;
    firstPage(): void;
    lastPage(): void;
    onPageSizeChange(event: Event): void;
    private zeroBasedPage;
    pageStart(): number;
    pageEnd(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPaginationComponent, "custom-pagination", never, { "maxVisiblePages": { "alias": "maxVisiblePages"; "required": false; }; "page": { "alias": "page"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "totalCount": { "alias": "totalCount"; "required": true; }; "baseValue": { "alias": "baseValue"; "required": false; }; "hideTotalCount": { "alias": "hideTotalCount"; "required": false; "isSignal": true; }; "showPageSize": { "alias": "showPageSize"; "required": false; }; }, { "pageChange": "pageChange"; }, never, never, true, never>;
}
