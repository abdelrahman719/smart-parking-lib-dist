export interface IDropdownOption {
    id: number | string;
    nameAr: string;
    nameEn: string;
    serialNumber?: string;
    enumValue?: string;
    iconPath?: string;
    latitude?: number;
    longitude?: number;
}
export interface ITabDropdownOption extends IDropdownOption {
    disabled: boolean;
}
export interface ListData {
    content: any;
    pageable: Pageable;
    last: boolean;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    sort: SortObj;
    totalElements: number;
    totalPages: number;
    empty: boolean;
}
export interface Pageable {
    sort: SortObj;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}
export interface SortObj {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
