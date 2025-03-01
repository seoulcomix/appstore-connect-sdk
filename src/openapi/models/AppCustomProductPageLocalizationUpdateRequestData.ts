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
import type { AppCustomProductPageLocalizationUpdateRequestDataAttributes } from './AppCustomProductPageLocalizationUpdateRequestDataAttributes';
import {
    AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSON,
    AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSONTyped,
    AppCustomProductPageLocalizationUpdateRequestDataAttributesToJSON,
} from './AppCustomProductPageLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationUpdateRequestData
 */
export interface AppCustomProductPageLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    type: AppCustomProductPageLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppCustomProductPageLocalizationUpdateRequestDataAttributes}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    attributes?: AppCustomProductPageLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppCustomProductPageLocalizationUpdateRequestDataTypeEnum = {
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageLocalizationUpdateRequestDataTypeEnum = typeof AppCustomProductPageLocalizationUpdateRequestDataTypeEnum[keyof typeof AppCustomProductPageLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageLocalizationUpdateRequestData interface.
 */
export function instanceOfAppCustomProductPageLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationUpdateRequestDataFromJSON(json: any): AppCustomProductPageLocalizationUpdateRequestData {
    return AppCustomProductPageLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppCustomProductPageLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppCustomProductPageLocalizationUpdateRequestDataToJSON(value?: AppCustomProductPageLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppCustomProductPageLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

