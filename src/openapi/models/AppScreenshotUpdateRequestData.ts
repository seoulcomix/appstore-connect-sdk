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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppScreenshotUpdateRequestData
 */
export interface AppScreenshotUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotUpdateRequestData
     */
    type: AppScreenshotUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppScreenshotUpdateRequestDataTypeEnum = {
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotUpdateRequestDataTypeEnum = typeof AppScreenshotUpdateRequestDataTypeEnum[keyof typeof AppScreenshotUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppScreenshotUpdateRequestData interface.
 */
export function instanceOfAppScreenshotUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppScreenshotUpdateRequestDataFromJSON(json: any): AppScreenshotUpdateRequestData {
    return AppScreenshotUpdateRequestDataFromJSONTyped(json, false);
}

export function AppScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppScreenshotUpdateRequestDataToJSON(value?: AppScreenshotUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

