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
import type { SubscriptionPromotionalOfferInlineCreateAttributes } from './SubscriptionPromotionalOfferInlineCreateAttributes';
import {
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSON,
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateAttributesToJSON,
} from './SubscriptionPromotionalOfferInlineCreateAttributes';
import type { SubscriptionPromotionalOfferInlineCreateRelationships } from './SubscriptionPromotionalOfferInlineCreateRelationships';
import {
    SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSON,
    SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateRelationshipsToJSON,
} from './SubscriptionPromotionalOfferInlineCreateRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreate
 */
export interface SubscriptionPromotionalOfferInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    type: SubscriptionPromotionalOfferInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateAttributes}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    attributes: SubscriptionPromotionalOfferInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateRelationships}
     * @memberof SubscriptionPromotionalOfferInlineCreate
     */
    relationships?: SubscriptionPromotionalOfferInlineCreateRelationships;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferInlineCreateTypeEnum = {
    SubscriptionPromotionalOffers: 'subscriptionPromotionalOffers'
} as const;
export type SubscriptionPromotionalOfferInlineCreateTypeEnum = typeof SubscriptionPromotionalOfferInlineCreateTypeEnum[keyof typeof SubscriptionPromotionalOfferInlineCreateTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreate interface.
 */
export function instanceOfSubscriptionPromotionalOfferInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferInlineCreateFromJSON(json: any): SubscriptionPromotionalOfferInlineCreate {
    return SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPromotionalOfferInlineCreateToJSON(value?: SubscriptionPromotionalOfferInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value.attributes),
        'relationships': SubscriptionPromotionalOfferInlineCreateRelationshipsToJSON(value.relationships),
    };
}

