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
 * @interface SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes
 */
export interface SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes
     */
    active?: boolean;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON(json: any): SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes {
    return SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON(value?: SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
    };
}

