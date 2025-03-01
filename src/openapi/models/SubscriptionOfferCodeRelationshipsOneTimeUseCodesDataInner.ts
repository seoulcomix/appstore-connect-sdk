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
 * @interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum = {
    SubscriptionOfferCodeOneTimeUseCodes: 'subscriptionOfferCodeOneTimeUseCodes'
} as const;
export type SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum = typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum[keyof typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    return SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSON(value?: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner | null): any {
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

