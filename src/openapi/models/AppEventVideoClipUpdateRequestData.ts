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
import type { AppEventVideoClipUpdateRequestDataAttributes } from './AppEventVideoClipUpdateRequestDataAttributes';
import {
    AppEventVideoClipUpdateRequestDataAttributesFromJSON,
    AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped,
    AppEventVideoClipUpdateRequestDataAttributesToJSON,
} from './AppEventVideoClipUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppEventVideoClipUpdateRequestData
 */
export interface AppEventVideoClipUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    type: AppEventVideoClipUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventVideoClipUpdateRequestDataAttributes}
     * @memberof AppEventVideoClipUpdateRequestData
     */
    attributes?: AppEventVideoClipUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppEventVideoClipUpdateRequestDataTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventVideoClipUpdateRequestDataTypeEnum = typeof AppEventVideoClipUpdateRequestDataTypeEnum[keyof typeof AppEventVideoClipUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEventVideoClipUpdateRequestData interface.
 */
export function instanceOfAppEventVideoClipUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEventVideoClipUpdateRequestDataFromJSON(json: any): AppEventVideoClipUpdateRequestData {
    return AppEventVideoClipUpdateRequestDataFromJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppEventVideoClipUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppEventVideoClipUpdateRequestDataToJSON(value?: AppEventVideoClipUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppEventVideoClipUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

