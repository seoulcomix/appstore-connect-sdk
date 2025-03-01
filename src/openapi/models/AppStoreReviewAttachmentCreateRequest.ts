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
import type { AppStoreReviewAttachmentCreateRequestData } from './AppStoreReviewAttachmentCreateRequestData';
import {
    AppStoreReviewAttachmentCreateRequestDataFromJSON,
    AppStoreReviewAttachmentCreateRequestDataFromJSONTyped,
    AppStoreReviewAttachmentCreateRequestDataToJSON,
} from './AppStoreReviewAttachmentCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentCreateRequest
 */
export interface AppStoreReviewAttachmentCreateRequest {
    /**
     * 
     * @type {AppStoreReviewAttachmentCreateRequestData}
     * @memberof AppStoreReviewAttachmentCreateRequest
     */
    data: AppStoreReviewAttachmentCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequest interface.
 */
export function instanceOfAppStoreReviewAttachmentCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentCreateRequestFromJSON(json: any): AppStoreReviewAttachmentCreateRequest {
    return AppStoreReviewAttachmentCreateRequestFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreReviewAttachmentCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreReviewAttachmentCreateRequestToJSON(value?: AppStoreReviewAttachmentCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreReviewAttachmentCreateRequestDataToJSON(value.data),
    };
}

