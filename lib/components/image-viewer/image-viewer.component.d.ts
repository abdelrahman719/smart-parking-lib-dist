import { EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomImageViewerComponent implements OnChanges, OnDestroy {
    private readonly document;
    src: string;
    alt: string;
    width: string;
    height: string;
    rounded: string;
    /** Omit images to retain the original single-image behavior. */
    images: readonly string[];
    initialIndex: number;
    /** Pass translated labels when using the gallery in a localized screen. */
    previousLabel: string;
    nextLabel: string;
    closeLabel: string;
    opened: EventEmitter<void>;
    closed: EventEmitter<void>;
    indexChange: EventEmitter<number>;
    isFullScreen: boolean;
    activeIndex: number;
    private previousOverflow;
    constructor(document: Document);
    get activeSrc(): string;
    ngOnChanges(changes: SimpleChanges): void;
    openFullScreen(index?: number): void;
    closeFullScreen(event?: Event): void;
    previousImage(event?: Event): void;
    nextImage(event?: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    ngOnDestroy(): void;
    private selectIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomImageViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomImageViewerComponent, "custom-image-viewer", never, { "src": { "alias": "src"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "images": { "alias": "images"; "required": false; }; "initialIndex": { "alias": "initialIndex"; "required": false; }; "previousLabel": { "alias": "previousLabel"; "required": false; }; "nextLabel": { "alias": "nextLabel"; "required": false; }; "closeLabel": { "alias": "closeLabel"; "required": false; }; }, { "opened": "opened"; "closed": "closed"; "indexChange": "indexChange"; }, never, never, true, never>;
}
