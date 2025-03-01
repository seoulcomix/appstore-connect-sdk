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
import type { SubscriptionIntroductoryOfferRelationships } from './SubscriptionIntroductoryOfferRelationships';
import {
    SubscriptionIntroductoryOfferRelationshipsFromJSON,
    SubscriptionIntroductoryOfferRelationshipsFromJSONTyped,
    SubscriptionIntroductoryOfferRelationshipsToJSON,
} from './SubscriptionIntroductoryOfferRelationships';
import type { SubscriptionPriceInlineCreateAttributes } from './SubscriptionPriceInlineCreateAttributes';
import {
    SubscriptionPriceInlineCreateAttributesFromJSON,
    SubscriptionPriceInlineCreateAttributesFromJSONTyped,
    SubscriptionPriceInlineCreateAttributesToJSON,
} from './SubscriptionPriceInlineCreateAttributes';

/**
 * 
 * @export
 * @interface SubscriptionPriceInlineCreate
 */
export interface SubscriptionPriceInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPriceInlineCreate
     */
    type: SubscriptionPriceInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPriceInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {SubscriptionPriceInlineCreateAttributes}
     * @memberof SubscriptionPriceInlineCreate
     */
    attributes?: SubscriptionPriceInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferRelationships}
     * @memberof SubscriptionPriceInlineCreate
     */
    relationships?: SubscriptionIntroductoryOfferRelationships;
}


/**
 * @export
 */
export const SubscriptionPriceInlineCreateTypeEnum = {
    SubscriptionPrices: 'subscriptionPrices'
} as const;
export type SubscriptionPriceInlineCreateTypeEnum = typeof SubscriptionPriceInlineCreateTypeEnum[keyof typeof SubscriptionPriceInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionPriceInlineCreate interface.
 */
export function instanceOfSubscriptionPriceInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SubscriptionPriceInlineCreateFromJSON(json: any): SubscriptionPriceInlineCreate {
    return SubscriptionPriceInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionPriceInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionPriceInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionIntroductoryOfferRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPriceInlineCreateToJSON(value?: SubscriptionPriceInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionPriceInlineCreateAttributesToJSON(value.attributes),
        'relationships': SubscriptionIntroductoryOfferRelationshipsToJSON(value.relationships),
    };
}

