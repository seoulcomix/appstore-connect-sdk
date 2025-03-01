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
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion
 */
export interface AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData}
     * @memberof AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion
     */
    data: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON(value?: AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON(value.data),
    };
}

