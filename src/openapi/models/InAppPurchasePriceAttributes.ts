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
 * @interface InAppPurchasePriceAttributes
 */
export interface InAppPurchasePriceAttributes {
    /**
     * 
     * @type {Date}
     * @memberof InAppPurchasePriceAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InAppPurchasePriceAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof InAppPurchasePriceAttributes
     */
    manual?: boolean;
}

/**
 * Check if a given object implements the InAppPurchasePriceAttributes interface.
 */
export function instanceOfInAppPurchasePriceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceAttributesFromJSON(json: any): InAppPurchasePriceAttributes {
    return InAppPurchasePriceAttributesFromJSONTyped(json, false);
}

export function InAppPurchasePriceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
    };
}

export function InAppPurchasePriceAttributesToJSON(value?: InAppPurchasePriceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'manual': value.manual,
    };
}

