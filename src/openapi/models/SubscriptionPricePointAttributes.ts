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
 * @interface SubscriptionPricePointAttributes
 */
export interface SubscriptionPricePointAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePointAttributes
     */
    customerPrice?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePointAttributes
     */
    proceeds?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPricePointAttributes
     */
    proceedsYear2?: string;
}

/**
 * Check if a given object implements the SubscriptionPricePointAttributes interface.
 */
export function instanceOfSubscriptionPricePointAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionPricePointAttributesFromJSON(json: any): SubscriptionPricePointAttributes {
    return SubscriptionPricePointAttributesFromJSONTyped(json, false);
}

export function SubscriptionPricePointAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePointAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerPrice': !exists(json, 'customerPrice') ? undefined : json['customerPrice'],
        'proceeds': !exists(json, 'proceeds') ? undefined : json['proceeds'],
        'proceedsYear2': !exists(json, 'proceedsYear2') ? undefined : json['proceedsYear2'],
    };
}

export function SubscriptionPricePointAttributesToJSON(value?: SubscriptionPricePointAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerPrice': value.customerPrice,
        'proceeds': value.proceeds,
        'proceedsYear2': value.proceedsYear2,
    };
}

