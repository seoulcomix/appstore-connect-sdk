/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PromotedPurchaseCreateRequestDataRelationshipsSubscription } from './PromotedPurchaseCreateRequestDataRelationshipsSubscription';
import {
    PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON,
    PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON,
} from './PromotedPurchaseCreateRequestDataRelationshipsSubscription';
import type { SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint } from './SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint';
import {
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointToJSON,
} from './SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint';
import type { SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory } from './SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory';
import {
    SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSON,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSONTyped,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryToJSON,
} from './SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferInlineCreateRelationships
 */
export interface SubscriptionIntroductoryOfferInlineCreateRelationships {
    /**
     * 
     * @type {PromotedPurchaseCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionIntroductoryOfferInlineCreateRelationships
     */
    subscription?: PromotedPurchaseCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory}
     * @memberof SubscriptionIntroductoryOfferInlineCreateRelationships
     */
    territory?: SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionIntroductoryOfferInlineCreateRelationships
     */
    subscriptionPricePoint?: SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateRelationships interface.
 */
export function instanceOfSubscriptionIntroductoryOfferInlineCreateRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsFromJSON(json: any): SubscriptionIntroductoryOfferInlineCreateRelationships {
    return SubscriptionIntroductoryOfferInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferInlineCreateRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': !exists(json, 'subscription') ? undefined : PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': !exists(json, 'territory') ? undefined : SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': !exists(json, 'subscriptionPricePoint') ? undefined : SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsToJSON(value?: SubscriptionIntroductoryOfferInlineCreateRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        'territory': SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryToJSON(value.territory),
        'subscriptionPricePoint': SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointToJSON(value.subscriptionPricePoint),
    };
}

