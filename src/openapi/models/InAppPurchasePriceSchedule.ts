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
import type { InAppPurchasePriceScheduleRelationships } from './InAppPurchasePriceScheduleRelationships';
import {
    InAppPurchasePriceScheduleRelationshipsFromJSON,
    InAppPurchasePriceScheduleRelationshipsFromJSONTyped,
    InAppPurchasePriceScheduleRelationshipsToJSON,
} from './InAppPurchasePriceScheduleRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchasePriceSchedule
 */
export interface InAppPurchasePriceSchedule {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePriceSchedule
     */
    type: InAppPurchasePriceScheduleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePriceSchedule
     */
    id: string;
    /**
     * 
     * @type {InAppPurchasePriceScheduleRelationships}
     * @memberof InAppPurchasePriceSchedule
     */
    relationships?: InAppPurchasePriceScheduleRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchasePriceSchedule
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchasePriceScheduleTypeEnum = {
    InAppPurchasePriceSchedules: 'inAppPurchasePriceSchedules'
} as const;
export type InAppPurchasePriceScheduleTypeEnum = typeof InAppPurchasePriceScheduleTypeEnum[keyof typeof InAppPurchasePriceScheduleTypeEnum];


/**
 * Check if a given object implements the InAppPurchasePriceSchedule interface.
 */
export function instanceOfInAppPurchasePriceSchedule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchasePriceScheduleFromJSON(json: any): InAppPurchasePriceSchedule {
    return InAppPurchasePriceScheduleFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchasePriceScheduleRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchasePriceScheduleToJSON(value?: InAppPurchasePriceSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': InAppPurchasePriceScheduleRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

