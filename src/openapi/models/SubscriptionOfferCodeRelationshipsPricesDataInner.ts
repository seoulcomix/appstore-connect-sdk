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
/**
 * 
 * @export
 * @interface SubscriptionOfferCodeRelationshipsPricesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsPricesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsPricesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsPricesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsPricesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionOfferCodeRelationshipsPricesDataInnerTypeEnum = {
    SubscriptionOfferCodePrices: 'subscriptionOfferCodePrices'
} as const;
export type SubscriptionOfferCodeRelationshipsPricesDataInnerTypeEnum = typeof SubscriptionOfferCodeRelationshipsPricesDataInnerTypeEnum[keyof typeof SubscriptionOfferCodeRelationshipsPricesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsPricesDataInner interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsPricesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsPricesDataInner {
    return SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsPricesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON(value?: SubscriptionOfferCodeRelationshipsPricesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

