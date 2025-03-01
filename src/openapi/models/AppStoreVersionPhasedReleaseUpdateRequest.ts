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
import type { AppStoreVersionPhasedReleaseUpdateRequestData } from './AppStoreVersionPhasedReleaseUpdateRequestData';
import {
    AppStoreVersionPhasedReleaseUpdateRequestDataFromJSON,
    AppStoreVersionPhasedReleaseUpdateRequestDataFromJSONTyped,
    AppStoreVersionPhasedReleaseUpdateRequestDataToJSON,
} from './AppStoreVersionPhasedReleaseUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseUpdateRequest
 */
export interface AppStoreVersionPhasedReleaseUpdateRequest {
    /**
     * 
     * @type {AppStoreVersionPhasedReleaseUpdateRequestData}
     * @memberof AppStoreVersionPhasedReleaseUpdateRequest
     */
    data: AppStoreVersionPhasedReleaseUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseUpdateRequest interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionPhasedReleaseUpdateRequestFromJSON(json: any): AppStoreVersionPhasedReleaseUpdateRequest {
    return AppStoreVersionPhasedReleaseUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionPhasedReleaseUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionPhasedReleaseUpdateRequestToJSON(value?: AppStoreVersionPhasedReleaseUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionPhasedReleaseUpdateRequestDataToJSON(value.data),
    };
}

