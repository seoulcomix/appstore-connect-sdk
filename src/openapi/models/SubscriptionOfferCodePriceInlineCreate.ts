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
import type { SubscriptionOfferCodePriceRelationships } from './SubscriptionOfferCodePriceRelationships';
import {
    SubscriptionOfferCodePriceRelationshipsFromJSON,
    SubscriptionOfferCodePriceRelationshipsFromJSONTyped,
    SubscriptionOfferCodePriceRelationshipsToJSON,
} from './SubscriptionOfferCodePriceRelationships';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodePriceInlineCreate
 */
export interface SubscriptionOfferCodePriceInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodePriceInlineCreate
     */
    type: SubscriptionOfferCodePriceInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodePriceInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {SubscriptionOfferCodePriceRelationships}
     * @memberof SubscriptionOfferCodePriceInlineCreate
     */
    relationships?: SubscriptionOfferCodePriceRelationships;
}


/**
 * @export
 */
export const SubscriptionOfferCodePriceInlineCreateTypeEnum = {
    SubscriptionOfferCodePrices: 'subscriptionOfferCodePrices'
} as const;
export type SubscriptionOfferCodePriceInlineCreateTypeEnum = typeof SubscriptionOfferCodePriceInlineCreateTypeEnum[keyof typeof SubscriptionOfferCodePriceInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodePriceInlineCreate interface.
 */
export function instanceOfSubscriptionOfferCodePriceInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SubscriptionOfferCodePriceInlineCreateFromJSON(json: any): SubscriptionOfferCodePriceInlineCreate {
    return SubscriptionOfferCodePriceInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionOfferCodePriceInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodePriceInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionOfferCodePriceRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionOfferCodePriceInlineCreateToJSON(value?: SubscriptionOfferCodePriceInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': SubscriptionOfferCodePriceRelationshipsToJSON(value.relationships),
    };
}

