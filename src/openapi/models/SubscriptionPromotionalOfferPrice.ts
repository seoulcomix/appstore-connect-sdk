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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { SubscriptionOfferCodePriceRelationships } from './SubscriptionOfferCodePriceRelationships';
import {
    SubscriptionOfferCodePriceRelationshipsFromJSON,
    SubscriptionOfferCodePriceRelationshipsFromJSONTyped,
    SubscriptionOfferCodePriceRelationshipsToJSON,
} from './SubscriptionOfferCodePriceRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferPrice
 */
export interface SubscriptionPromotionalOfferPrice {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferPrice
     */
    type: SubscriptionPromotionalOfferPriceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferPrice
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodePriceRelationships}
     * @memberof SubscriptionPromotionalOfferPrice
     */
    relationships?: SubscriptionOfferCodePriceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionPromotionalOfferPrice
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferPriceTypeEnum = {
    SubscriptionPromotionalOfferPrices: 'subscriptionPromotionalOfferPrices'
} as const;
export type SubscriptionPromotionalOfferPriceTypeEnum = typeof SubscriptionPromotionalOfferPriceTypeEnum[keyof typeof SubscriptionPromotionalOfferPriceTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferPrice interface.
 */
export function instanceOfSubscriptionPromotionalOfferPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferPriceFromJSON(json: any): SubscriptionPromotionalOfferPrice {
    return SubscriptionPromotionalOfferPriceFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionOfferCodePriceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionPromotionalOfferPriceToJSON(value?: SubscriptionPromotionalOfferPrice | null): any {
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
        'links': ResourceLinksToJSON(value.links),
    };
}

