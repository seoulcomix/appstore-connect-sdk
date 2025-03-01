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
import type { AppCustomProductPageUpdateRequestData } from './AppCustomProductPageUpdateRequestData';
import {
    AppCustomProductPageUpdateRequestDataFromJSON,
    AppCustomProductPageUpdateRequestDataFromJSONTyped,
    AppCustomProductPageUpdateRequestDataToJSON,
} from './AppCustomProductPageUpdateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageUpdateRequest
 */
export interface AppCustomProductPageUpdateRequest {
    /**
     * 
     * @type {AppCustomProductPageUpdateRequestData}
     * @memberof AppCustomProductPageUpdateRequest
     */
    data: AppCustomProductPageUpdateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageUpdateRequest interface.
 */
export function instanceOfAppCustomProductPageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppCustomProductPageUpdateRequestFromJSON(json: any): AppCustomProductPageUpdateRequest {
    return AppCustomProductPageUpdateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageUpdateRequestToJSON(value?: AppCustomProductPageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageUpdateRequestDataToJSON(value.data),
    };
}

