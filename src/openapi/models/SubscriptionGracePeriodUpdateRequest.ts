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
import type { SubscriptionGracePeriodUpdateRequestData } from './SubscriptionGracePeriodUpdateRequestData';
import {
    SubscriptionGracePeriodUpdateRequestDataFromJSON,
    SubscriptionGracePeriodUpdateRequestDataFromJSONTyped,
    SubscriptionGracePeriodUpdateRequestDataToJSON,
} from './SubscriptionGracePeriodUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionGracePeriodUpdateRequest
 */
export interface SubscriptionGracePeriodUpdateRequest {
    /**
     * 
     * @type {SubscriptionGracePeriodUpdateRequestData}
     * @memberof SubscriptionGracePeriodUpdateRequest
     */
    data: SubscriptionGracePeriodUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionGracePeriodUpdateRequest interface.
 */
export function instanceOfSubscriptionGracePeriodUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionGracePeriodUpdateRequestFromJSON(json: any): SubscriptionGracePeriodUpdateRequest {
    return SubscriptionGracePeriodUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionGracePeriodUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionGracePeriodUpdateRequestToJSON(value?: SubscriptionGracePeriodUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionGracePeriodUpdateRequestDataToJSON(value.data),
    };
}

