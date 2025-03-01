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
import type { MarketplaceSearchDetailUpdateRequestData } from './MarketplaceSearchDetailUpdateRequestData';
import {
    MarketplaceSearchDetailUpdateRequestDataFromJSON,
    MarketplaceSearchDetailUpdateRequestDataFromJSONTyped,
    MarketplaceSearchDetailUpdateRequestDataToJSON,
} from './MarketplaceSearchDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceSearchDetailUpdateRequest
 */
export interface MarketplaceSearchDetailUpdateRequest {
    /**
     * 
     * @type {MarketplaceSearchDetailUpdateRequestData}
     * @memberof MarketplaceSearchDetailUpdateRequest
     */
    data: MarketplaceSearchDetailUpdateRequestData;
}

/**
 * Check if a given object implements the MarketplaceSearchDetailUpdateRequest interface.
 */
export function instanceOfMarketplaceSearchDetailUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MarketplaceSearchDetailUpdateRequestFromJSON(json: any): MarketplaceSearchDetailUpdateRequest {
    return MarketplaceSearchDetailUpdateRequestFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': MarketplaceSearchDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceSearchDetailUpdateRequestToJSON(value?: MarketplaceSearchDetailUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MarketplaceSearchDetailUpdateRequestDataToJSON(value.data),
    };
}

