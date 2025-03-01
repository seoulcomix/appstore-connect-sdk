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
import type { MarketplaceSearchDetailCreateRequestData } from './MarketplaceSearchDetailCreateRequestData';
import {
    MarketplaceSearchDetailCreateRequestDataFromJSON,
    MarketplaceSearchDetailCreateRequestDataFromJSONTyped,
    MarketplaceSearchDetailCreateRequestDataToJSON,
} from './MarketplaceSearchDetailCreateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceSearchDetailCreateRequest
 */
export interface MarketplaceSearchDetailCreateRequest {
    /**
     * 
     * @type {MarketplaceSearchDetailCreateRequestData}
     * @memberof MarketplaceSearchDetailCreateRequest
     */
    data: MarketplaceSearchDetailCreateRequestData;
}

/**
 * Check if a given object implements the MarketplaceSearchDetailCreateRequest interface.
 */
export function instanceOfMarketplaceSearchDetailCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MarketplaceSearchDetailCreateRequestFromJSON(json: any): MarketplaceSearchDetailCreateRequest {
    return MarketplaceSearchDetailCreateRequestFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': MarketplaceSearchDetailCreateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceSearchDetailCreateRequestToJSON(value?: MarketplaceSearchDetailCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MarketplaceSearchDetailCreateRequestDataToJSON(value.data),
    };
}

