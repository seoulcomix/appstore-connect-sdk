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
import type { AppStoreReviewAttachment } from './AppStoreReviewAttachment';
import {
    AppStoreReviewAttachmentFromJSON,
    AppStoreReviewAttachmentFromJSONTyped,
    AppStoreReviewAttachmentToJSON,
} from './AppStoreReviewAttachment';
import type { AppStoreReviewDetail } from './AppStoreReviewDetail';
import {
    AppStoreReviewDetailFromJSON,
    AppStoreReviewDetailFromJSONTyped,
    AppStoreReviewDetailToJSON,
} from './AppStoreReviewDetail';
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
 * @interface AppStoreReviewAttachmentsResponse
 */
export interface AppStoreReviewAttachmentsResponse {
    /**
     * 
     * @type {Array<AppStoreReviewAttachment>}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    data: Array<AppStoreReviewAttachment>;
    /**
     * 
     * @type {Array<AppStoreReviewDetail>}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    included?: Array<AppStoreReviewDetail>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreReviewAttachmentsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentsResponse interface.
 */
export function instanceOfAppStoreReviewAttachmentsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentsResponseFromJSON(json: any): AppStoreReviewAttachmentsResponse {
    return AppStoreReviewAttachmentsResponseFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreReviewAttachmentFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreReviewDetailFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppStoreReviewAttachmentsResponseToJSON(value?: AppStoreReviewAttachmentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppStoreReviewAttachmentToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreReviewDetailToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

