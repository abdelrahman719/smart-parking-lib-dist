export declare function toDate(input: string | Date | null | undefined): Date | null;
export declare function plural(n: number, unit: string): string;
export declare function formatAbsolute(date: Date, locale?: string): string;
/**
 * Main formatter
 */
export declare function formatActivityTime(input: string | Date, opts?: {
    now?: Date;
    activeNowSeconds?: number;
    locale?: string;
}): string;
