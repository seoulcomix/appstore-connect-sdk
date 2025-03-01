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
 * @interface AppEventCreateRequestDataAttributes
 */
export interface AppEventCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    badge?: AppEventCreateRequestDataAttributesBadgeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    deepLink?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    purchaseRequirement?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    primaryLocale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    priority?: AppEventCreateRequestDataAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventCreateRequestDataAttributes
     */
    purpose?: AppEventCreateRequestDataAttributesPurposeEnum;
    /**
     * 
     * @type {Array<AppEventAttributesTerritorySchedulesInner>}
     * @memberof AppEventCreateRequestDataAttributes
     */
    territorySchedules?: Array<AppEventAttributesTerritorySchedulesInner>;
}


/**
 * @export
 */
export const AppEventCreateRequestDataAttributesBadgeEnum = {
    LiveEvent: 'LIVE_EVENT',
    Premiere: 'PREMIERE',
    Challenge: 'CHALLENGE',
    Competition: 'COMPETITION',
    NewSeason: 'NEW_SEASON',
    MajorUpdate: 'MAJOR_UPDATE',
    SpecialEvent: 'SPECIAL_EVENT'
} as const;
export type AppEventCreateRequestDataAttributesBadgeEnum = typeof AppEventCreateRequestDataAttributesBadgeEnum[keyof typeof AppEventCreateRequestDataAttributesBadgeEnum];

/**
 * @export
 */
export const AppEventCreateRequestDataAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type AppEventCreateRequestDataAttributesPriorityEnum = typeof AppEventCreateRequestDataAttributesPriorityEnum[keyof typeof AppEventCreateRequestDataAttributesPriorityEnum];

/**
 * @export
 */
export const AppEventCreateRequestDataAttributesPurposeEnum = {
    AppropriateForAllUsers: 'APPROPRIATE_FOR_ALL_USERS',
    AttractNewUsers: 'ATTRACT_NEW_USERS',
    KeepActiveUsersInformed: 'KEEP_ACTIVE_USERS_INFORMED',
    BringBackLapsedUsers: 'BRING_BACK_LAPSED_USERS'
} as const;
export type AppEventCreateRequestDataAttributesPurposeEnum = typeof AppEventCreateRequestDataAttributesPurposeEnum[keyof typeof AppEventCreateRequestDataAttributesPurposeEnum];


/**
 * Check if a given object implements the AppEventCreateRequestDataAttributes interface.
 */
export function instanceOfAppEventCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceName" in value;

    return isInstance;
}

export function AppEventCreateRequestDataAttributesFromJSON(json: any): AppEventCreateRequestDataAttributes {
    return AppEventCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'badge': !exists(json, 'badge') ? undefined : json['badge'],
        'deepLink': !exists(json, 'deepLink') ? undefined : json['deepLink'],
        'purchaseRequirement': !exists(json, 'purchaseRequirement') ? undefined : json['purchaseRequirement'],
        'primaryLocale': !exists(json, 'primaryLocale') ? undefined : json['primaryLocale'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'territorySchedules': !exists(json, 'territorySchedules') ? undefined : ((json['territorySchedules'] as Array<any>).map(AppEventAttributesTerritorySchedulesInnerFromJSON)),
    };
}

export function AppEventCreateRequestDataAttributesToJSON(value?: AppEventCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'badge': value.badge,
        'deepLink': value.deepLink,
        'purchaseRequirement': value.purchaseRequirement,
        'primaryLocale': value.primaryLocale,
        'priority': value.priority,
        'purpose': value.purpose,
        'territorySchedules': value.territorySchedules === undefined ? undefined : ((value.territorySchedules as Array<any>).map(AppEventAttributesTerritorySchedulesInnerToJSON)),
    };
}

