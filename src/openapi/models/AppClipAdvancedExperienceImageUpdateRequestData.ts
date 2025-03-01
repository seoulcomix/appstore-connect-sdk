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
 * @interface AppClipAdvancedExperienceImageUpdateRequestData
 */
export interface AppClipAdvancedExperienceImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageUpdateRequestData
     */
    type: AppClipAdvancedExperienceImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppClipAdvancedExperienceImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceImageUpdateRequestDataTypeEnum = {
    AppClipAdvancedExperienceImages: 'appClipAdvancedExperienceImages'
} as const;
export type AppClipAdvancedExperienceImageUpdateRequestDataTypeEnum = typeof AppClipAdvancedExperienceImageUpdateRequestDataTypeEnum[keyof typeof AppClipAdvancedExperienceImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceImageUpdateRequestData interface.
 */
export function instanceOfAppClipAdvancedExperienceImageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceImageUpdateRequestDataFromJSON(json: any): AppClipAdvancedExperienceImageUpdateRequestData {
    return AppClipAdvancedExperienceImageUpdateRequestDataFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppClipAdvancedExperienceImageUpdateRequestDataToJSON(value?: AppClipAdvancedExperienceImageUpdateRequestData | null): any {
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

