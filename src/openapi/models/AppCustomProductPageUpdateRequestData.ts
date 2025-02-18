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
import type { AppCustomProductPageUpdateRequestDataAttributes } from './AppCustomProductPageUpdateRequestDataAttributes';
import {
    AppCustomProductPageUpdateRequestDataAttributesFromJSON,
    AppCustomProductPageUpdateRequestDataAttributesFromJSONTyped,
    AppCustomProductPageUpdateRequestDataAttributesToJSON,
} from './AppCustomProductPageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPageUpdateRequestData
 */
export interface AppCustomProductPageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    type: AppCustomProductPageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppCustomProductPageUpdateRequestDataAttributes}
     * @memberof AppCustomProductPageUpdateRequestData
     */
    attributes?: AppCustomProductPageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppCustomProductPageUpdateRequestDataTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageUpdateRequestDataTypeEnum = typeof AppCustomProductPageUpdateRequestDataTypeEnum[keyof typeof AppCustomProductPageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageUpdateRequestData interface.
 */
export function instanceOfAppCustomProductPageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageUpdateRequestDataFromJSON(json: any): AppCustomProductPageUpdateRequestData {
    return AppCustomProductPageUpdateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppCustomProductPageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppCustomProductPageUpdateRequestDataToJSON(value?: AppCustomProductPageUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppCustomProductPageUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

