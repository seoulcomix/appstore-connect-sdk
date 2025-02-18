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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { AppClipHeaderImageCreateRequestDataRelationships } from './AppClipHeaderImageCreateRequestDataRelationships';
import {
    AppClipHeaderImageCreateRequestDataRelationshipsFromJSON,
    AppClipHeaderImageCreateRequestDataRelationshipsFromJSONTyped,
    AppClipHeaderImageCreateRequestDataRelationshipsToJSON,
} from './AppClipHeaderImageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppClipHeaderImageCreateRequestData
 */
export interface AppClipHeaderImageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipHeaderImageCreateRequestData
     */
    type: AppClipHeaderImageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppClipHeaderImageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppClipHeaderImageCreateRequestDataRelationships}
     * @memberof AppClipHeaderImageCreateRequestData
     */
    relationships: AppClipHeaderImageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipHeaderImageCreateRequestDataTypeEnum = {
    AppClipHeaderImages: 'appClipHeaderImages'
} as const;
export type AppClipHeaderImageCreateRequestDataTypeEnum = typeof AppClipHeaderImageCreateRequestDataTypeEnum[keyof typeof AppClipHeaderImageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipHeaderImageCreateRequestData interface.
 */
export function instanceOfAppClipHeaderImageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppClipHeaderImageCreateRequestDataFromJSON(json: any): AppClipHeaderImageCreateRequestData {
    return AppClipHeaderImageCreateRequestDataFromJSONTyped(json, false);
}

export function AppClipHeaderImageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppClipHeaderImageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipHeaderImageCreateRequestDataToJSON(value?: AppClipHeaderImageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppClipHeaderImageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

