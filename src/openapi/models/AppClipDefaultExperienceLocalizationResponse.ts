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
import type { AppClipDefaultExperienceLocalization } from './AppClipDefaultExperienceLocalization';
import {
    AppClipDefaultExperienceLocalizationFromJSON,
    AppClipDefaultExperienceLocalizationFromJSONTyped,
    AppClipDefaultExperienceLocalizationToJSON,
} from './AppClipDefaultExperienceLocalization';
import type { AppClipDefaultExperienceLocalizationsResponseIncludedInner } from './AppClipDefaultExperienceLocalizationsResponseIncludedInner';
import {
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON,
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSONTyped,
    AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON,
} from './AppClipDefaultExperienceLocalizationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationResponse
 */
export interface AppClipDefaultExperienceLocalizationResponse {
    /**
     * 
     * @type {AppClipDefaultExperienceLocalization}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    data: AppClipDefaultExperienceLocalization;
    /**
     * 
     * @type {Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    included?: Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipDefaultExperienceLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationResponse interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationResponseFromJSON(json: any): AppClipDefaultExperienceLocalizationResponse {
    return AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceLocalizationResponseToJSON(value?: AppClipDefaultExperienceLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

