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
import type { AppPreviewUpdateRequestDataAttributes } from './AppPreviewUpdateRequestDataAttributes';
import {
    AppPreviewUpdateRequestDataAttributesFromJSON,
    AppPreviewUpdateRequestDataAttributesFromJSONTyped,
    AppPreviewUpdateRequestDataAttributesToJSON,
} from './AppPreviewUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppPreviewUpdateRequestData
 */
export interface AppPreviewUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestData
     */
    type: AppPreviewUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppPreviewUpdateRequestDataAttributes}
     * @memberof AppPreviewUpdateRequestData
     */
    attributes?: AppPreviewUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppPreviewUpdateRequestDataTypeEnum = {
    AppPreviews: 'appPreviews'
} as const;
export type AppPreviewUpdateRequestDataTypeEnum = typeof AppPreviewUpdateRequestDataTypeEnum[keyof typeof AppPreviewUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppPreviewUpdateRequestData interface.
 */
export function instanceOfAppPreviewUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreviewUpdateRequestDataFromJSON(json: any): AppPreviewUpdateRequestData {
    return AppPreviewUpdateRequestDataFromJSONTyped(json, false);
}

export function AppPreviewUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPreviewUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppPreviewUpdateRequestDataToJSON(value?: AppPreviewUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPreviewUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

