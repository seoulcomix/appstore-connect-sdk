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
import type { AppCustomProductPageVersion } from './AppCustomProductPageVersion';
import {
    AppCustomProductPageVersionFromJSON,
    AppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageVersionToJSON,
} from './AppCustomProductPageVersion';
import type { AppCustomProductPageVersionsResponseIncludedInner } from './AppCustomProductPageVersionsResponseIncludedInner';
import {
    AppCustomProductPageVersionsResponseIncludedInnerFromJSON,
    AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageVersionsResponseIncludedInnerToJSON,
} from './AppCustomProductPageVersionsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionResponse
 */
export interface AppCustomProductPageVersionResponse {
    /**
     * 
     * @type {AppCustomProductPageVersion}
     * @memberof AppCustomProductPageVersionResponse
     */
    data: AppCustomProductPageVersion;
    /**
     * 
     * @type {Array<AppCustomProductPageVersionsResponseIncludedInner>}
     * @memberof AppCustomProductPageVersionResponse
     */
    included?: Array<AppCustomProductPageVersionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionResponse interface.
 */
export function instanceOfAppCustomProductPageVersionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCustomProductPageVersionResponseFromJSON(json: any): AppCustomProductPageVersionResponse {
    return AppCustomProductPageVersionResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageVersionFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageVersionResponseToJSON(value?: AppCustomProductPageVersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageVersionToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPageVersionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

