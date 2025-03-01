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
/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceImageCreateRequestDataAttributes
 */
export interface AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppClipAdvancedExperienceImageCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageCreateRequestDataAttributes
     */
    fileName: string;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceImageCreateRequestDataAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceImageCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "fileName" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json: any): AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    return AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'],
        'fileName': json['fileName'],
    };
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value?: AppClipAdvancedExperienceImageCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
    };
}

