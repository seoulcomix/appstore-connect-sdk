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
import type { PhasedReleaseState } from './PhasedReleaseState';
import {
    PhasedReleaseStateFromJSON,
    PhasedReleaseStateFromJSONTyped,
    PhasedReleaseStateToJSON,
} from './PhasedReleaseState';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseAttributes
 */
export interface AppStoreVersionPhasedReleaseAttributes {
    /**
     * 
     * @type {PhasedReleaseState}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    phasedReleaseState?: PhasedReleaseState;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    totalPauseDuration?: number;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    currentDayNumber?: number;
}

/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseAttributes interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionPhasedReleaseAttributesFromJSON(json: any): AppStoreVersionPhasedReleaseAttributes {
    return AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phasedReleaseState': !exists(json, 'phasedReleaseState') ? undefined : PhasedReleaseStateFromJSON(json['phasedReleaseState']),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'totalPauseDuration': !exists(json, 'totalPauseDuration') ? undefined : json['totalPauseDuration'],
        'currentDayNumber': !exists(json, 'currentDayNumber') ? undefined : json['currentDayNumber'],
    };
}

export function AppStoreVersionPhasedReleaseAttributesToJSON(value?: AppStoreVersionPhasedReleaseAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phasedReleaseState': PhasedReleaseStateToJSON(value.phasedReleaseState),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'totalPauseDuration': value.totalPauseDuration,
        'currentDayNumber': value.currentDayNumber,
    };
}

