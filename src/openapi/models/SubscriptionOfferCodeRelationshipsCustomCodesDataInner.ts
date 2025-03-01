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
 * @interface SubscriptionOfferCodeRelationshipsCustomCodesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsCustomCodesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum = {
    SubscriptionOfferCodeCustomCodes: 'subscriptionOfferCodeCustomCodes'
} as const;
export type SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum = typeof SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum[keyof typeof SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsCustomCodesDataInner interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsCustomCodesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsCustomCodesDataInner {
    return SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsCustomCodesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON(value?: SubscriptionOfferCodeRelationshipsCustomCodesDataInner | null): any {
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

