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
 * @interface InAppPurchasePriceInlineCreateAttributes
 */
export interface InAppPurchasePriceInlineCreateAttributes {
    /**
     * 
     * @type {Date}
     * @memberof InAppPurchasePriceInlineCreateAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InAppPurchasePriceInlineCreateAttributes
     */
    endDate?: Date;
}

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreateAttributes interface.
 */
export function instanceOfInAppPurchasePriceInlineCreateAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateAttributesFromJSON(json: any): InAppPurchasePriceInlineCreateAttributes {
    return InAppPurchasePriceInlineCreateAttributesFromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
    };
}

export function InAppPurchasePriceInlineCreateAttributesToJSON(value?: InAppPurchasePriceInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
    };
}

