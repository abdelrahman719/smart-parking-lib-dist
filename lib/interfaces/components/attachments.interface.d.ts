import { SafeUrl } from "@angular/platform-browser";
export interface IAttachment {
    fileName: string;
    mimeType: string;
    base64Content: string;
}
export interface ISmpAttachment {
    base64: string;
    contentType: string;
    fileName: string;
}
export interface ExistingServerItem {
    id: string;
    imagePath: string;
}
export interface ExistingResolvedItem {
    id: string;
    imagePath: SafeUrl;
}
