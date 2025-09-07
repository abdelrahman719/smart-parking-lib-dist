export interface IGlobalAuthResponse<T> {
    success: boolean;
    message: string;
    messageAr: string;
    data: T;
}
export interface IPaginatedGlobalAuthResponse<T> {
    success: boolean;
    message: string;
    messageAr: string;
    data: {
        content: T;
        totalElements: number;
        number: number;
        size: number;
        last: boolean;
    };
}
export interface IGlobalAppsResponse<T> {
    timestamp: string;
    status: 'SUCCESS' | 'ERROR' | string;
    message: string;
    messageAr: string;
    data: T;
}
export interface IPaginatedGlobalAppsResponse<T> {
    timestamp: string;
    status: 'SUCCESS' | 'ERROR' | string;
    message: string;
    data: {
        content: T;
        totalElements: number;
        number: number;
        size: number;
        last: boolean;
    };
}
