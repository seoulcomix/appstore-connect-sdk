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
import type { AppClipAdvancedExperience } from './AppClipAdvancedExperience';
import {
    AppClipAdvancedExperienceFromJSON,
    AppClipAdvancedExperienceFromJSONTyped,
    AppClipAdvancedExperienceToJSON,
} from './AppClipAdvancedExperience';
import type { AppClipAdvancedExperiencesResponseIncludedInner } from './AppClipAdvancedExperiencesResponseIncludedInner';
import {
    AppClipAdvancedExperiencesResponseIncludedInnerFromJSON,
    AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped,
    AppClipAdvancedExperiencesResponseIncludedInnerToJSON,
} from './AppClipAdvancedExperiencesResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperiencesResponse
 */
export interface AppClipAdvancedExperiencesResponse {
    /**
     * 
     * @type {Array<AppClipAdvancedExperience>}
     * @memberof AppClipAdvancedExperiencesResponse
     */
    data: Array<AppClipAdvancedExperience>;
    /**
     * 
     * @type {Array<AppClipAdvancedExperiencesResponseIncludedInner>}
     * @memberof AppClipAdvancedExperiencesResponse
     */
    included?: Array<AppClipAdvancedExperiencesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppClipAdvancedExperiencesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipAdvancedExperiencesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppClipAdvancedExperiencesResponse interface.
 */
export function instanceOfAppClipAdvancedExperiencesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipAdvancedExperiencesResponseFromJSON(json: any): AppClipAdvancedExperiencesResponse {
    return AppClipAdvancedExperiencesResponseFromJSONTyped(json, false);
}

export function AppClipAdvancedExperiencesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperiencesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipAdvancedExperienceFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppClipAdvancedExperiencesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppClipAdvancedExperiencesResponseToJSON(value?: AppClipAdvancedExperiencesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppClipAdvancedExperienceToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppClipAdvancedExperiencesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

