import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export type NotificationToastTone = 'info' | 'success' | 'warning' | 'error';
/** Presentation only. Notification identity, navigation, queues, and timers belong to the caller. */
export declare class CustomNotificationToastComponent {
    title: string;
    description: string;
    iconPath: string;
    closeLabel: string;
    tone: NotificationToastTone;
    activate: EventEmitter<void>;
    dismiss: EventEmitter<void>;
    pause: EventEmitter<void>;
    resume: EventEmitter<void>;
    onDismiss(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomNotificationToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomNotificationToastComponent, "custom-notification-toast", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "iconPath": { "alias": "iconPath"; "required": false; }; "closeLabel": { "alias": "closeLabel"; "required": false; }; "tone": { "alias": "tone"; "required": false; }; }, { "activate": "activate"; "dismiss": "dismiss"; "pause": "pause"; "resume": "resume"; }, never, never, true, never>;
}
