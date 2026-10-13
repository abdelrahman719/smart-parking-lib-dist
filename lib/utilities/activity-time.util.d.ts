export type ActivityTimeFormat = 'dateOnly' | 'dateTime' | 'dayMonthYear' | 'dayMonthYearDashTime' | 'dayMonthYearTime' | 'fullDateTime' | 'historyDateTime' | 'longMonthYear' | 'mediumDateTime' | 'minuteSecond' | 'monthDayYear' | 'monthDayYearAtTime' | 'notificationTimestamp' | 'requestDetails' | 'shortDateTime' | 'shortTime' | 'spacedTime' | 'timeOnly' | 'timeWithMeridiem' | 'weekdayLongDate';
export type ActivityTimeMode = 'absolute' | 'relative';
export type ActivityTimeTimezoneMode = 'local' | 'keepUtcClock';
type ActivityTimeOptions = {
    now?: Date;
    activeNowSeconds?: number;
    locale?: string;
    showTime?: boolean;
    format?: ActivityTimeFormat;
    timezoneMode?: ActivityTimeTimezoneMode;
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
