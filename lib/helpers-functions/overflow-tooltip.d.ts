/**
 * Hover tooltip for clipped (ellipsised) text. Shows the element's full text
 * only when it or one of its descendants actually overflows.
 *
 * Colours match the zones app `app-tooltip-panel` (#4b4f55 / #fff) and stay
 * the same in dark mode, like that panel does.
 */
export interface OverflowTooltipOptions {
    /** Force the tooltip direction (e.g. phone columns). */
    dir?: 'ltr' | 'rtl';
}
/**
 * Shows a tooltip under `host` with its full text, if the text is clipped.
 * @param host - The element being hovered (usually `event.currentTarget`)
 * @param options - Optional direction override
 */
export declare function showOverflowTooltip(host: HTMLElement, options?: OverflowTooltipOptions): void;
/** Removes the open overflow tooltip, if any. */
export declare function hideOverflowTooltip(): void;
