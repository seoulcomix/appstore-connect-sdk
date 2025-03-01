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
import type { AppClipDefaultExperienceLocalizationUpdateRequestData } from './AppClipDefaultExperienceLocalizationUpdateRequestData';
import {
    AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSONTyped,
    AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON,
} from './AppClipDefaultExperienceLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationUpdateRequest
 */
export interface AppClipDefaultExperienceLocalizationUpdateRequest {
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationUpdateRequestData}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequest
     */
    data: AppClipDefaultExperienceLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequest interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationUpdateRequestFromJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequest {
    return AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceLocalizationUpdateRequestToJSON(value?: AppClipDefaultExperienceLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON(value.data),
    };
}

