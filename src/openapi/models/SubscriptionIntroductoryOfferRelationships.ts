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
import type { AppPricePointV3RelationshipsTerritory } from './AppPricePointV3RelationshipsTerritory';
import {
    AppPricePointV3RelationshipsTerritoryFromJSON,
    AppPricePointV3RelationshipsTerritoryFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryToJSON,
} from './AppPricePointV3RelationshipsTerritory';
import type { PromotedPurchaseRelationshipsSubscription } from './PromotedPurchaseRelationshipsSubscription';
import {
    PromotedPurchaseRelationshipsSubscriptionFromJSON,
    PromotedPurchaseRelationshipsSubscriptionFromJSONTyped,
    PromotedPurchaseRelationshipsSubscriptionToJSON,
} from './PromotedPurchaseRelationshipsSubscription';
import type { SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint } from './SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint';
import {
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON,
} from './SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferRelationships
 */
export interface SubscriptionIntroductoryOfferRelationships {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionIntroductoryOfferRelationships
     */
    subscriptionPricePoint?: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferRelationships interface.
 */
export function instanceOfSubscriptionIntroductoryOfferRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionIntroductoryOfferRelationshipsFromJSON(json: any): SubscriptionIntroductoryOfferRelationships {
    return SubscriptionIntroductoryOfferRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': !exists(json, 'subscription') ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': !exists(json, 'territory') ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': !exists(json, 'subscriptionPricePoint') ? undefined : SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionIntroductoryOfferRelationshipsToJSON(value?: SubscriptionIntroductoryOfferRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value.subscription),
        'territory': AppPricePointV3RelationshipsTerritoryToJSON(value.territory),
        'subscriptionPricePoint': SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON(value.subscriptionPricePoint),
    };
}

