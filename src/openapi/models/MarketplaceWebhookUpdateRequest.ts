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
import type { MarketplaceWebhookUpdateRequestData } from './MarketplaceWebhookUpdateRequestData';
import {
    MarketplaceWebhookUpdateRequestDataFromJSON,
    MarketplaceWebhookUpdateRequestDataFromJSONTyped,
    MarketplaceWebhookUpdateRequestDataToJSON,
} from './MarketplaceWebhookUpdateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceWebhookUpdateRequest
 */
export interface MarketplaceWebhookUpdateRequest {
    /**
     * 
     * @type {MarketplaceWebhookUpdateRequestData}
     * @memberof MarketplaceWebhookUpdateRequest
     */
    data: MarketplaceWebhookUpdateRequestData;
}

/**
 * Check if a given object implements the MarketplaceWebhookUpdateRequest interface.
 */
export function instanceOfMarketplaceWebhookUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MarketplaceWebhookUpdateRequestFromJSON(json: any): MarketplaceWebhookUpdateRequest {
    return MarketplaceWebhookUpdateRequestFromJSONTyped(json, false);
}

export function MarketplaceWebhookUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': MarketplaceWebhookUpdateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceWebhookUpdateRequestToJSON(value?: MarketplaceWebhookUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MarketplaceWebhookUpdateRequestDataToJSON(value.data),
    };
}

