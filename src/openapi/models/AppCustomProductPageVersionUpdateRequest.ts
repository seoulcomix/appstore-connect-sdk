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
import type { AppCustomProductPageVersionUpdateRequestData } from './AppCustomProductPageVersionUpdateRequestData';
import {
    AppCustomProductPageVersionUpdateRequestDataFromJSON,
    AppCustomProductPageVersionUpdateRequestDataFromJSONTyped,
    AppCustomProductPageVersionUpdateRequestDataToJSON,
} from './AppCustomProductPageVersionUpdateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionUpdateRequest
 */
export interface AppCustomProductPageVersionUpdateRequest {
    /**
     * 
     * @type {AppCustomProductPageVersionUpdateRequestData}
     * @memberof AppCustomProductPageVersionUpdateRequest
     */
    data: AppCustomProductPageVersionUpdateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionUpdateRequest interface.
 */
export function instanceOfAppCustomProductPageVersionUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppCustomProductPageVersionUpdateRequestFromJSON(json: any): AppCustomProductPageVersionUpdateRequest {
    return AppCustomProductPageVersionUpdateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageVersionUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageVersionUpdateRequestToJSON(value?: AppCustomProductPageVersionUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageVersionUpdateRequestDataToJSON(value.data),
    };
}

