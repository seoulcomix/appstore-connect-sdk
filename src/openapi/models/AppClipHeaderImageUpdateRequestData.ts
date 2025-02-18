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
 * @interface AppClipHeaderImageUpdateRequestData
 */
export interface AppClipHeaderImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    type: AppClipHeaderImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppClipHeaderImageUpdateRequestDataTypeEnum = {
    AppClipHeaderImages: 'appClipHeaderImages'
} as const;
export type AppClipHeaderImageUpdateRequestDataTypeEnum = typeof AppClipHeaderImageUpdateRequestDataTypeEnum[keyof typeof AppClipHeaderImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipHeaderImageUpdateRequestData interface.
 */
export function instanceOfAppClipHeaderImageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipHeaderImageUpdateRequestDataFromJSON(json: any): AppClipHeaderImageUpdateRequestData {
    return AppClipHeaderImageUpdateRequestDataFromJSONTyped(json, false);
}

export function AppClipHeaderImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppClipHeaderImageUpdateRequestDataToJSON(value?: AppClipHeaderImageUpdateRequestData | null): any {
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

