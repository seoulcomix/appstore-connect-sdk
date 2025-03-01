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
import type { AppClip } from './AppClip';
import {
    AppClipFromJSON,
    AppClipFromJSONTyped,
    AppClipToJSON,
} from './AppClip';
import type { AppClipsResponseIncludedInner } from './AppClipsResponseIncludedInner';
import {
    AppClipsResponseIncludedInnerFromJSON,
    AppClipsResponseIncludedInnerFromJSONTyped,
    AppClipsResponseIncludedInnerToJSON,
} from './AppClipsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppClipResponse
 */
export interface AppClipResponse {
    /**
     * 
     * @type {AppClip}
     * @memberof AppClipResponse
     */
    data: AppClip;
    /**
     * 
     * @type {Array<AppClipsResponseIncludedInner>}
     * @memberof AppClipResponse
     */
    included?: Array<AppClipsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipResponse interface.
 */
export function instanceOfAppClipResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipResponseFromJSON(json: any): AppClipResponse {
    return AppClipResponseFromJSONTyped(json, false);
}

export function AppClipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppClipsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipResponseToJSON(value?: AppClipResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppClipsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

