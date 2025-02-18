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
 * @interface AppPriceV2Attributes
 */
export interface AppPriceV2Attributes {
    /**
     * 
     * @type {boolean}
     * @memberof AppPriceV2Attributes
     */
    manual?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof AppPriceV2Attributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppPriceV2Attributes
     */
    endDate?: Date;
}

/**
 * Check if a given object implements the AppPriceV2Attributes interface.
 */
export function instanceOfAppPriceV2Attributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPriceV2AttributesFromJSON(json: any): AppPriceV2Attributes {
    return AppPriceV2AttributesFromJSONTyped(json, false);
}

export function AppPriceV2AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2Attributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
    };
}

export function AppPriceV2AttributesToJSON(value?: AppPriceV2Attributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manual': value.manual,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
    };
}

