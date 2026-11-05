import * as i0 from "@angular/core";
export declare class CustomImageViewerComponent {
    src: string;
    alt: string;
    width: string;
    height: string;
    rounded: string;
    isFullScreen: boolean;
    openFullScreen(): void;
    closeFullScreen(): void;
    onKeyDown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomImageViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomImageViewerComponent, "custom-image-viewer", never, { "src": { "alias": "src"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; }, {}, never, never, true, never>;
}
