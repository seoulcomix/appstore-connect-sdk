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
import type { InAppPurchaseLocalizationCreateRequestData } from './InAppPurchaseLocalizationCreateRequestData';
import {
    InAppPurchaseLocalizationCreateRequestDataFromJSON,
    InAppPurchaseLocalizationCreateRequestDataFromJSONTyped,
    InAppPurchaseLocalizationCreateRequestDataToJSON,
} from './InAppPurchaseLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalizationCreateRequest
 */
export interface InAppPurchaseLocalizationCreateRequest {
    /**
     * 
     * @type {InAppPurchaseLocalizationCreateRequestData}
     * @memberof InAppPurchaseLocalizationCreateRequest
     */
    data: InAppPurchaseLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseLocalizationCreateRequest interface.
 */
export function instanceOfInAppPurchaseLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationCreateRequestFromJSON(json: any): InAppPurchaseLocalizationCreateRequest {
    return InAppPurchaseLocalizationCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseLocalizationCreateRequestToJSON(value?: InAppPurchaseLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseLocalizationCreateRequestDataToJSON(value.data),
    };
}

