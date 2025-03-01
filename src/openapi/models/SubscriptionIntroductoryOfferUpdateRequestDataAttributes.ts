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
 * @interface SubscriptionIntroductoryOfferUpdateRequestDataAttributes
 */
export interface SubscriptionIntroductoryOfferUpdateRequestDataAttributes {
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferUpdateRequestDataAttributes
     */
    endDate?: Date;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferUpdateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionIntroductoryOfferUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionIntroductoryOfferUpdateRequestDataAttributesFromJSON(json: any): SubscriptionIntroductoryOfferUpdateRequestDataAttributes {
    return SubscriptionIntroductoryOfferUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
    };
}

export function SubscriptionIntroductoryOfferUpdateRequestDataAttributesToJSON(value?: SubscriptionIntroductoryOfferUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
    };
}

