export declare enum AuthConstant {
    TOKEN = "accessToken",
    REFRESH_TOKEN = "refreshToken",
    USER_DATA = "user",
    USER_PERMISSIONS = "permissions",
    USER_ROLES = "roles",
    EXPIRES_AT = "expiresIn"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}
export declare enum Roles {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    PLANNER = "PLANNER",
    SUPERVISOR = "SUPERVISOR",
    OPERATOR = "OPERATOR"
}
export declare enum PERMISSIONS {
    all = "all",
    PARKING_ZONE_VIEW = "zone:view",
    PARKING_ZONE_CREATE = "zone:create",
    PARKING_ZONE_UPDATE = "zone:update",
    PARKING_ZONE_DELETE = "zone:delete",
    VIEW_POLICIES = "poilcies:view"
}
