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
import type { AppStoreVersionPhasedRelease } from './AppStoreVersionPhasedRelease';
import {
    AppStoreVersionPhasedReleaseFromJSON,
    AppStoreVersionPhasedReleaseFromJSONTyped,
    AppStoreVersionPhasedReleaseToJSON,
} from './AppStoreVersionPhasedRelease';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseWithoutIncludesResponse
 */
export interface AppStoreVersionPhasedReleaseWithoutIncludesResponse {
    /**
     * 
     * @type {AppStoreVersionPhasedRelease}
     * @memberof AppStoreVersionPhasedReleaseWithoutIncludesResponse
     */
    data: AppStoreVersionPhasedRelease;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionPhasedReleaseWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseWithoutIncludesResponse interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionPhasedReleaseWithoutIncludesResponseFromJSON(json: any): AppStoreVersionPhasedReleaseWithoutIncludesResponse {
    return AppStoreVersionPhasedReleaseWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionPhasedReleaseFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionPhasedReleaseWithoutIncludesResponseToJSON(value?: AppStoreVersionPhasedReleaseWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionPhasedReleaseToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

