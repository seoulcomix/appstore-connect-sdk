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
import type { SubscriptionIntroductoryOfferUpdateRequestData } from './SubscriptionIntroductoryOfferUpdateRequestData';
import {
    SubscriptionIntroductoryOfferUpdateRequestDataFromJSON,
    SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped,
    SubscriptionIntroductoryOfferUpdateRequestDataToJSON,
} from './SubscriptionIntroductoryOfferUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferUpdateRequest
 */
export interface SubscriptionIntroductoryOfferUpdateRequest {
    /**
     * 
     * @type {SubscriptionIntroductoryOfferUpdateRequestData}
     * @memberof SubscriptionIntroductoryOfferUpdateRequest
     */
    data: SubscriptionIntroductoryOfferUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferUpdateRequest interface.
 */
export function instanceOfSubscriptionIntroductoryOfferUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferUpdateRequestFromJSON(json: any): SubscriptionIntroductoryOfferUpdateRequest {
    return SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionIntroductoryOfferUpdateRequestToJSON(value?: SubscriptionIntroductoryOfferUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferUpdateRequestDataToJSON(value.data),
    };
}

