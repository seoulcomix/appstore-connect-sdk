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
 * @interface PromotedPurchaseUpdateRequestDataAttributes
 */
export interface PromotedPurchaseUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    visibleForAllUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the PromotedPurchaseUpdateRequestDataAttributes interface.
 */
export function instanceOfPromotedPurchaseUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseUpdateRequestDataAttributesFromJSON(json: any): PromotedPurchaseUpdateRequestDataAttributes {
    return PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'visibleForAllUsers': !exists(json, 'visibleForAllUsers') ? undefined : json['visibleForAllUsers'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function PromotedPurchaseUpdateRequestDataAttributesToJSON(value?: PromotedPurchaseUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'visibleForAllUsers': value.visibleForAllUsers,
        'enabled': value.enabled,
    };
}

