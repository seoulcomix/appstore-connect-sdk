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
 * @interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
 */
export interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
     */
    type: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum = {
    AppClipHeaderImages: 'appClipHeaderImages'
} as const;
export type AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum = typeof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON(json: any): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData {
    return AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON(value?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

