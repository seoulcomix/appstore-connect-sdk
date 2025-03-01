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
import type { InAppPurchaseImageCreateRequestData } from './InAppPurchaseImageCreateRequestData';
import {
    InAppPurchaseImageCreateRequestDataFromJSON,
    InAppPurchaseImageCreateRequestDataFromJSONTyped,
    InAppPurchaseImageCreateRequestDataToJSON,
} from './InAppPurchaseImageCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseImageCreateRequest
 */
export interface InAppPurchaseImageCreateRequest {
    /**
     * 
     * @type {InAppPurchaseImageCreateRequestData}
     * @memberof InAppPurchaseImageCreateRequest
     */
    data: InAppPurchaseImageCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseImageCreateRequest interface.
 */
export function instanceOfInAppPurchaseImageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseImageCreateRequestFromJSON(json: any): InAppPurchaseImageCreateRequest {
    return InAppPurchaseImageCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseImageCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseImageCreateRequestToJSON(value?: InAppPurchaseImageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseImageCreateRequestDataToJSON(value.data),
    };
}

