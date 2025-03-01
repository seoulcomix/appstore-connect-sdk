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
import type { AppClipDefaultExperienceCreateRequestData } from './AppClipDefaultExperienceCreateRequestData';
import {
    AppClipDefaultExperienceCreateRequestDataFromJSON,
    AppClipDefaultExperienceCreateRequestDataFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataToJSON,
} from './AppClipDefaultExperienceCreateRequestData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceCreateRequest
 */
export interface AppClipDefaultExperienceCreateRequest {
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestData}
     * @memberof AppClipDefaultExperienceCreateRequest
     */
    data: AppClipDefaultExperienceCreateRequestData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequest interface.
 */
export function instanceOfAppClipDefaultExperienceCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipDefaultExperienceCreateRequestFromJSON(json: any): AppClipDefaultExperienceCreateRequest {
    return AppClipDefaultExperienceCreateRequestFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceCreateRequestDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceCreateRequestToJSON(value?: AppClipDefaultExperienceCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceCreateRequestDataToJSON(value.data),
    };
}

