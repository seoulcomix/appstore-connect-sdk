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
import type { InAppPurchasePricePointRelationships } from './InAppPurchasePricePointRelationships';
import {
    InAppPurchasePricePointRelationshipsFromJSON,
    InAppPurchasePricePointRelationshipsFromJSONTyped,
    InAppPurchasePricePointRelationshipsToJSON,
} from './InAppPurchasePricePointRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { SubscriptionPricePointAttributes } from './SubscriptionPricePointAttributes';
import {
    SubscriptionPricePointAttributesFromJSON,
    SubscriptionPricePointAttributesFromJSONTyped,
    SubscriptionPricePointAttributesToJSON,
} from './SubscriptionPricePointAttributes';

/**
 * 
 * @export
 * @interface SubscriptionPricePoint
 */
export interface SubscriptionPricePoint {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    type: SubscriptionPricePointTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    id: string;
    /**
     * 
     * @type {SubscriptionPricePointAttributes}
     * @memberof SubscriptionPricePoint
     */
    attributes?: SubscriptionPricePointAttributes;
    /**
     * 
     * @type {InAppPurchasePricePointRelationships}
     * @memberof SubscriptionPricePoint
     */
    relationships?: InAppPurchasePricePointRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionPricePoint
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionPricePointTypeEnum = {
    SubscriptionPricePoints: 'subscriptionPricePoints'
} as const;
export type SubscriptionPricePointTypeEnum = typeof SubscriptionPricePointTypeEnum[keyof typeof SubscriptionPricePointTypeEnum];


/**
 * Check if a given object implements the SubscriptionPricePoint interface.
 */
export function instanceOfSubscriptionPricePoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionPricePointFromJSON(json: any): SubscriptionPricePoint {
    return SubscriptionPricePointFromJSONTyped(json, false);
}

export function SubscriptionPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionPricePointAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchasePricePointRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionPricePointToJSON(value?: SubscriptionPricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionPricePointAttributesToJSON(value.attributes),
        'relationships': InAppPurchasePricePointRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

