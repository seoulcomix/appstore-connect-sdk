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
import type { SubscriptionAppStoreReviewScreenshotCreateRequestData } from './SubscriptionAppStoreReviewScreenshotCreateRequestData';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotCreateRequest
 */
export interface SubscriptionAppStoreReviewScreenshotCreateRequest {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestData}
     * @memberof SubscriptionAppStoreReviewScreenshotCreateRequest
     */
    data: SubscriptionAppStoreReviewScreenshotCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotCreateRequest interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestFromJSON(json: any): SubscriptionAppStoreReviewScreenshotCreateRequest {
    return SubscriptionAppStoreReviewScreenshotCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionAppStoreReviewScreenshotCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionAppStoreReviewScreenshotCreateRequestToJSON(value?: SubscriptionAppStoreReviewScreenshotCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionAppStoreReviewScreenshotCreateRequestDataToJSON(value.data),
    };
}

