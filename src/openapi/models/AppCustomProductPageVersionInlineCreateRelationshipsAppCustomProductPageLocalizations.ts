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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations
 */
export interface AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations {
    /**
     * 
     * @type {Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner>}
     * @memberof AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations
     */
    data?: Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations interface.
 */
export function instanceOfAppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSON(json: any): AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations {
    return AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON)),
    };
}

export function AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsToJSON(value?: AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON)),
    };
}

