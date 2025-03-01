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
import type { AppClipDefaultExperienceLocalizationCreateRequestData } from './AppClipDefaultExperienceLocalizationCreateRequestData';
import {
    AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON,
    AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped,
    AppClipDefaultExperienceLocalizationCreateRequestDataToJSON,
} from './AppClipDefaultExperienceLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationCreateRequest
 */
export interface AppClipDefaultExperienceLocalizationCreateRequest {
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationCreateRequestData}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequest
     */
    data: AppClipDefaultExperienceLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequest interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationCreateRequestFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequest {
    return AppClipDefaultExperienceLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceLocalizationCreateRequestToJSON(value?: AppClipDefaultExperienceLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationCreateRequestDataToJSON(value.data),
    };
}

