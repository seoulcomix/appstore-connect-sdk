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
import type { AppCustomProductPageVersionCreateRequestData } from './AppCustomProductPageVersionCreateRequestData';
import {
    AppCustomProductPageVersionCreateRequestDataFromJSON,
    AppCustomProductPageVersionCreateRequestDataFromJSONTyped,
    AppCustomProductPageVersionCreateRequestDataToJSON,
} from './AppCustomProductPageVersionCreateRequestData';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionCreateRequest
 */
export interface AppCustomProductPageVersionCreateRequest {
    /**
     * 
     * @type {AppCustomProductPageVersionCreateRequestData}
     * @memberof AppCustomProductPageVersionCreateRequest
     */
    data: AppCustomProductPageVersionCreateRequestData;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionCreateRequest interface.
 */
export function instanceOfAppCustomProductPageVersionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppCustomProductPageVersionCreateRequestFromJSON(json: any): AppCustomProductPageVersionCreateRequest {
    return AppCustomProductPageVersionCreateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageVersionCreateRequestDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageVersionCreateRequestToJSON(value?: AppCustomProductPageVersionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageVersionCreateRequestDataToJSON(value.data),
    };
}

