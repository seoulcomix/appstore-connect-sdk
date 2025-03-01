/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppEventAttributesTerritorySchedulesInner } from './AppEventAttributesTerritorySchedulesInner';
import {
    AppEventAttributesTerritorySchedulesInnerFromJSON,
    AppEventAttributesTerritorySchedulesInnerFromJSONTyped,
    AppEventAttributesTerritorySchedulesInnerToJSON,
} from './AppEventAttributesTerritorySchedulesInner';

/**
 * 
 * @export
 * @interface AppEventAttributes
 */
export interface AppEventAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    badge?: AppEventAttributesBadgeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    eventState?: AppEventAttributesEventStateEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    deepLink?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    purchaseRequirement?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    primaryLocale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    priority?: AppEventAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventAttributes
     */
    purpose?: AppEventAttributesPurposeEnum;
    /**
     * 
     * @type {Array<AppEventAttributesTerritorySchedulesInner>}
     * @memberof AppEventAttributes
     */
    territorySchedules?: Array<AppEventAttributesTerritorySchedulesInner>;
    /**
     * 
     * @type {Array<AppEventAttributesTerritorySchedulesInner>}
     * @memberof AppEventAttributes
     */
    archivedTerritorySchedules?: Array<AppEventAttributesTerritorySchedulesInner>;
}


/**
 * @export
 */
export const AppEventAttributesBadgeEnum = {
    LiveEvent: 'LIVE_EVENT',
    Premiere: 'PREMIERE',
    Challenge: 'CHALLENGE',
    Competition: 'COMPETITION',
    NewSeason: 'NEW_SEASON',
    MajorUpdate: 'MAJOR_UPDATE',
    SpecialEvent: 'SPECIAL_EVENT'
} as const;
export type AppEventAttributesBadgeEnum = typeof AppEventAttributesBadgeEnum[keyof typeof AppEventAttributesBadgeEnum];

/**
 * @export
 */
export const AppEventAttributesEventStateEnum = {
    Draft: 'DRAFT',
    ReadyForReview: 'READY_FOR_REVIEW',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    Rejected: 'REJECTED',
    Accepted: 'ACCEPTED',
    Approved: 'APPROVED',
    Published: 'PUBLISHED',
    Past: 'PAST',
    Archived: 'ARCHIVED'
} as const;
export type AppEventAttributesEventStateEnum = typeof AppEventAttributesEventStateEnum[keyof typeof AppEventAttributesEventStateEnum];

/**
 * @export
 */
export const AppEventAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type AppEventAttributesPriorityEnum = typeof AppEventAttributesPriorityEnum[keyof typeof AppEventAttributesPriorityEnum];

/**
 * @export
 */
export const AppEventAttributesPurposeEnum = {
    AppropriateForAllUsers: 'APPROPRIATE_FOR_ALL_USERS',
    AttractNewUsers: 'ATTRACT_NEW_USERS',
    KeepActiveUsersInformed: 'KEEP_ACTIVE_USERS_INFORMED',
    BringBackLapsedUsers: 'BRING_BACK_LAPSED_USERS'
} as const;
export type AppEventAttributesPurposeEnum = typeof AppEventAttributesPurposeEnum[keyof typeof AppEventAttributesPurposeEnum];


/**
 * Check if a given object implements the AppEventAttributes interface.
 */
export function instanceOfAppEventAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventAttributesFromJSON(json: any): AppEventAttributes {
    return AppEventAttributesFromJSONTyped(json, false);
}

export function AppEventAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'badge': !exists(json, 'badge') ? undefined : json['badge'],
        'eventState': !exists(json, 'eventState') ? undefined : json['eventState'],
        'deepLink': !exists(json, 'deepLink') ? undefined : json['deepLink'],
        'purchaseRequirement': !exists(json, 'purchaseRequirement') ? undefined : json['purchaseRequirement'],
        'primaryLocale': !exists(json, 'primaryLocale') ? undefined : json['primaryLocale'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'territorySchedules': !exists(json, 'territorySchedules') ? undefined : ((json['territorySchedules'] as Array<any>).map(AppEventAttributesTerritorySchedulesInnerFromJSON)),
        'archivedTerritorySchedules': !exists(json, 'archivedTerritorySchedules') ? undefined : ((json['archivedTerritorySchedules'] as Array<any>).map(AppEventAttributesTerritorySchedulesInnerFromJSON)),
    };
}

export function AppEventAttributesToJSON(value?: AppEventAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'badge': value.badge,
        'eventState': value.eventState,
        'deepLink': value.deepLink,
        'purchaseRequirement': value.purchaseRequirement,
        'primaryLocale': value.primaryLocale,
        'priority': value.priority,
        'purpose': value.purpose,
        'territorySchedules': value.territorySchedules === undefined ? undefined : ((value.territorySchedules as Array<any>).map(AppEventAttributesTerritorySchedulesInnerToJSON)),
        'archivedTerritorySchedules': value.archivedTerritorySchedules === undefined ? undefined : ((value.archivedTerritorySchedules as Array<any>).map(AppEventAttributesTerritorySchedulesInnerToJSON)),
    };
}

