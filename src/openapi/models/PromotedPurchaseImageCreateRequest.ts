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
import type { PromotedPurchaseImageCreateRequestData } from './PromotedPurchaseImageCreateRequestData';
import {
    PromotedPurchaseImageCreateRequestDataFromJSON,
    PromotedPurchaseImageCreateRequestDataFromJSONTyped,
    PromotedPurchaseImageCreateRequestDataToJSON,
} from './PromotedPurchaseImageCreateRequestData';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageCreateRequest
 */
export interface PromotedPurchaseImageCreateRequest {
    /**
     * 
     * @type {PromotedPurchaseImageCreateRequestData}
     * @memberof PromotedPurchaseImageCreateRequest
     */
    data: PromotedPurchaseImageCreateRequestData;
}

/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequest interface.
 */
export function instanceOfPromotedPurchaseImageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PromotedPurchaseImageCreateRequestFromJSON(json: any): PromotedPurchaseImageCreateRequest {
    return PromotedPurchaseImageCreateRequestFromJSONTyped(json, false);
}

export function PromotedPurchaseImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseImageCreateRequestDataFromJSON(json['data']),
    };
}

export function PromotedPurchaseImageCreateRequestToJSON(value?: PromotedPurchaseImageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PromotedPurchaseImageCreateRequestDataToJSON(value.data),
    };
}

