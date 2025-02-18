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
import type { SubscriptionOfferCodeCustomCodeUpdateRequestData } from './SubscriptionOfferCodeCustomCodeUpdateRequestData';
import {
    SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSON,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSONTyped,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataToJSON,
} from './SubscriptionOfferCodeCustomCodeUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeUpdateRequest
 */
export interface SubscriptionOfferCodeCustomCodeUpdateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeUpdateRequestData}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequest
     */
    data: SubscriptionOfferCodeCustomCodeUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeUpdateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestFromJSON(json: any): SubscriptionOfferCodeCustomCodeUpdateRequest {
    return SubscriptionOfferCodeCustomCodeUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestToJSON(value?: SubscriptionOfferCodeCustomCodeUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeUpdateRequestDataToJSON(value.data),
    };
}

