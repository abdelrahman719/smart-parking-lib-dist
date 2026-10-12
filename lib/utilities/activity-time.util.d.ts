export type ActivityTimeFormat = 'dateOnly' | 'dateTime' | 'shortDateTime' | 'timeOnly';
export type ActivityTimeMode = 'absolute' | 'relative';
type ActivityTimeOptions = {
    now?: Date;
    activeNowSeconds?: number;
    locale?: string;
    showTime?: boolean;
    format?: ActivityTimeFormat;
    timezoneMode?: 'local' | 'keepUtcClock';
};
export declare function toDate(input: string | Date | null | undefined): Date | null;
export declare function formatAbsolute(date: Date, locale?: string, showTime?: boolean): string;
/**
 * Absolute app date display. Defaults to browser-local timezone conversion,
 * matching Angular formatDate/appDate behavior.
 */
export declare function formatActivityTime(input: string | Date | number | null | undefined, lang?: string, opts?: ActivityTimeOptions): string;
/**
 * Relative "ago" formatter kept for the cases that need live activity wording.
 */
export declare function formatRelativeActivityTime(input: string | Date | null | undefined, lang?: string, opts?: ActivityTimeOptions): string;
export {};
