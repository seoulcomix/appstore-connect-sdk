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
import type { AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes } from './AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes';
import {
    AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSONTyped,
    AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSON,
} from './AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationUpdateRequestData
 */
export interface AppClipDefaultExperienceLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequestData
     */
    type: AppClipDefaultExperienceLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequestData
     */
    attributes?: AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationUpdateRequestDataTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
} as const;
export type AppClipDefaultExperienceLocalizationUpdateRequestDataTypeEnum = typeof AppClipDefaultExperienceLocalizationUpdateRequestDataTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequestData interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequestData {
    return AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON(value?: AppClipDefaultExperienceLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

