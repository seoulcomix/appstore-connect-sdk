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
 * @interface AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions
 */
export interface AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions {
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData>}
     * @memberof AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions
     */
    data?: Array<AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData>;
}

/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions interface.
 */
export function instanceOfAppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSON(json: any): AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions {
    return AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON)),
    };
}

export function AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsToJSON(value?: AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON)),
    };
}

