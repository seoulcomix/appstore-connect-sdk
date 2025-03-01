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
import type { AppPreviewSetCreateRequestDataRelationships } from './AppPreviewSetCreateRequestDataRelationships';
import {
    AppPreviewSetCreateRequestDataRelationshipsFromJSON,
    AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped,
    AppPreviewSetCreateRequestDataRelationshipsToJSON,
} from './AppPreviewSetCreateRequestDataRelationships';
import type { AppScreenshotSetCreateRequestDataAttributes } from './AppScreenshotSetCreateRequestDataAttributes';
import {
    AppScreenshotSetCreateRequestDataAttributesFromJSON,
    AppScreenshotSetCreateRequestDataAttributesFromJSONTyped,
    AppScreenshotSetCreateRequestDataAttributesToJSON,
} from './AppScreenshotSetCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppScreenshotSetCreateRequestData
 */
export interface AppScreenshotSetCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSetCreateRequestData
     */
    type: AppScreenshotSetCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppScreenshotSetCreateRequestDataAttributes}
     * @memberof AppScreenshotSetCreateRequestData
     */
    attributes: AppScreenshotSetCreateRequestDataAttributes;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationships}
     * @memberof AppScreenshotSetCreateRequestData
     */
    relationships?: AppPreviewSetCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppScreenshotSetCreateRequestDataTypeEnum = {
    AppScreenshotSets: 'appScreenshotSets'
} as const;
export type AppScreenshotSetCreateRequestDataTypeEnum = typeof AppScreenshotSetCreateRequestDataTypeEnum[keyof typeof AppScreenshotSetCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppScreenshotSetCreateRequestData interface.
 */
export function instanceOfAppScreenshotSetCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function AppScreenshotSetCreateRequestDataFromJSON(json: any): AppScreenshotSetCreateRequestData {
    return AppScreenshotSetCreateRequestDataFromJSONTyped(json, false);
}

export function AppScreenshotSetCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppScreenshotSetCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPreviewSetCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppScreenshotSetCreateRequestDataToJSON(value?: AppScreenshotSetCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppScreenshotSetCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppPreviewSetCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

