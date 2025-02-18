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
import type { AppStoreVersionUpdateRequestData } from './AppStoreVersionUpdateRequestData';
import {
    AppStoreVersionUpdateRequestDataFromJSON,
    AppStoreVersionUpdateRequestDataFromJSONTyped,
    AppStoreVersionUpdateRequestDataToJSON,
} from './AppStoreVersionUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionUpdateRequest
 */
export interface AppStoreVersionUpdateRequest {
    /**
     * 
     * @type {AppStoreVersionUpdateRequestData}
     * @memberof AppStoreVersionUpdateRequest
     */
    data: AppStoreVersionUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionUpdateRequest interface.
 */
export function instanceOfAppStoreVersionUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionUpdateRequestFromJSON(json: any): AppStoreVersionUpdateRequest {
    return AppStoreVersionUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionUpdateRequestToJSON(value?: AppStoreVersionUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionUpdateRequestDataToJSON(value.data),
    };
}

