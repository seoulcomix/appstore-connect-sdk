/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PromotedPurchaseImageUpdateRequestData } from './PromotedPurchaseImageUpdateRequestData';
import {
    PromotedPurchaseImageUpdateRequestDataFromJSON,
    PromotedPurchaseImageUpdateRequestDataFromJSONTyped,
    PromotedPurchaseImageUpdateRequestDataToJSON,
} from './PromotedPurchaseImageUpdateRequestData';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageUpdateRequest
 */
export interface PromotedPurchaseImageUpdateRequest {
    /**
     * 
     * @type {PromotedPurchaseImageUpdateRequestData}
     * @memberof PromotedPurchaseImageUpdateRequest
     */
    data: PromotedPurchaseImageUpdateRequestData;
}

/**
 * Check if a given object implements the PromotedPurchaseImageUpdateRequest interface.
 */
export function instanceOfPromotedPurchaseImageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PromotedPurchaseImageUpdateRequestFromJSON(json: any): PromotedPurchaseImageUpdateRequest {
    return PromotedPurchaseImageUpdateRequestFromJSONTyped(json, false);
}

export function PromotedPurchaseImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseImageUpdateRequestDataFromJSON(json['data']),
    };
}

export function PromotedPurchaseImageUpdateRequestToJSON(value?: PromotedPurchaseImageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PromotedPurchaseImageUpdateRequestDataToJSON(value.data),
    };
}

