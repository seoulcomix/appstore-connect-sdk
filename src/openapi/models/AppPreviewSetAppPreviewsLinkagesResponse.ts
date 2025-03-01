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
import type { AppPreviewSetRelationshipsAppPreviewsDataInner } from './AppPreviewSetRelationshipsAppPreviewsDataInner';
import {
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON,
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped,
    AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON,
} from './AppPreviewSetRelationshipsAppPreviewsDataInner';
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
 * @interface AppPreviewSetAppPreviewsLinkagesResponse
 */
export interface AppPreviewSetAppPreviewsLinkagesResponse {
    /**
     * 
     * @type {Array<AppPreviewSetRelationshipsAppPreviewsDataInner>}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    data: Array<AppPreviewSetRelationshipsAppPreviewsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppPreviewSetAppPreviewsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPreviewSetAppPreviewsLinkagesResponse interface.
 */
export function instanceOfAppPreviewSetAppPreviewsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreviewSetAppPreviewsLinkagesResponseFromJSON(json: any): AppPreviewSetAppPreviewsLinkagesResponse {
    return AppPreviewSetAppPreviewsLinkagesResponseFromJSONTyped(json, false);
}

export function AppPreviewSetAppPreviewsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetAppPreviewsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppPreviewSetAppPreviewsLinkagesResponseToJSON(value?: AppPreviewSetAppPreviewsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

