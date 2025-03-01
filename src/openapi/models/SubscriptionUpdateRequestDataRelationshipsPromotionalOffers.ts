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
import type { SubscriptionRelationshipsPromotionalOffersDataInner } from './SubscriptionRelationshipsPromotionalOffersDataInner';
import {
    SubscriptionRelationshipsPromotionalOffersDataInnerFromJSON,
    SubscriptionRelationshipsPromotionalOffersDataInnerFromJSONTyped,
    SubscriptionRelationshipsPromotionalOffersDataInnerToJSON,
} from './SubscriptionRelationshipsPromotionalOffersDataInner';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequestDataRelationshipsPromotionalOffers
 */
export interface SubscriptionUpdateRequestDataRelationshipsPromotionalOffers {
    /**
     * 
     * @type {Array<SubscriptionRelationshipsPromotionalOffersDataInner>}
     * @memberof SubscriptionUpdateRequestDataRelationshipsPromotionalOffers
     */
    data?: Array<SubscriptionRelationshipsPromotionalOffersDataInner>;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequestDataRelationshipsPromotionalOffers interface.
 */
export function instanceOfSubscriptionUpdateRequestDataRelationshipsPromotionalOffers(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON(json: any): SubscriptionUpdateRequestDataRelationshipsPromotionalOffers {
    return SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestDataRelationshipsPromotionalOffers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsPromotionalOffersDataInnerFromJSON)),
    };
}

export function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON(value?: SubscriptionUpdateRequestDataRelationshipsPromotionalOffers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionRelationshipsPromotionalOffersDataInnerToJSON)),
    };
}

