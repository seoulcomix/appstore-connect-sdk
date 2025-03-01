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
import type { InAppPurchaseV2UpdateRequestData } from './InAppPurchaseV2UpdateRequestData';
import {
    InAppPurchaseV2UpdateRequestDataFromJSON,
    InAppPurchaseV2UpdateRequestDataFromJSONTyped,
    InAppPurchaseV2UpdateRequestDataToJSON,
} from './InAppPurchaseV2UpdateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseV2UpdateRequest
 */
export interface InAppPurchaseV2UpdateRequest {
    /**
     * 
     * @type {InAppPurchaseV2UpdateRequestData}
     * @memberof InAppPurchaseV2UpdateRequest
     */
    data: InAppPurchaseV2UpdateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseV2UpdateRequest interface.
 */
export function instanceOfInAppPurchaseV2UpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseV2UpdateRequestFromJSON(json: any): InAppPurchaseV2UpdateRequest {
    return InAppPurchaseV2UpdateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseV2UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2UpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseV2UpdateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseV2UpdateRequestToJSON(value?: InAppPurchaseV2UpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseV2UpdateRequestDataToJSON(value.data),
    };
}

